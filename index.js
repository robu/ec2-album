const AWS = require('aws-sdk')
const S3 = new AWS.S3({region: 'eu-central-1'})
const express = require('express')
const app = express()
const path = require("path")

app.use(express.static('public'))

function s3_list_objects(do_after) {
  var params = {
    Bucket: "examplebucket",
    MaxKeys: 200
  }
  var s3_objects = []
  S3.listObjectsV2(params, function(err, data) {
    if (err) {
      console.log(err, err.stack)
    } else {
      for (let i=0; i<data.Contents.length; i++) {
        let s3_object = data.Contents[i]
        let img_obj = {
          img_url: `https://s3.eu-central-1.amazonaws.com/${params.Bucket}/${s3_object.Key}`,
          img_text: s3_object.LastModified
        }
        s3_objects.push(img_obj)
      }
    }
    return do_after(s3_objects)
  })
}

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname+'/index.html'))
})

app.get('/thumbnails', function(req, res) {
  s3_list_objects((objs)=>{ res.send({images: objs}) })
  })

app.listen(80, function() {
  console.log('Example app listening on port 80!')
})
