import React from 'react'
import S3FileUpload from 'react-s3';

function UploadPic() {
    const config = {
        bucketName: process.env.REACT_APP_AWSBUCKET,
        region: process.env.REACT_APP_AWSREGION,
        accessKeyId:process.env.REACT_APP_AWSACCESSKEYID,
        secretAccessKey: process.env.REACT_APP_AWSSECRETKEY
    }
    console.log(config)
    const upload = (e) => {
        S3FileUpload.uploadFile(e.target.files[0],config).then((data) => {
            console.log("response:",data)
            console.log("location:",data.location)
        }).catch( (err) => {
            console.log("error happened :",err)
        })
    }
    return (
    <div style={{paddingLeft:"10px"}}>
        <h3>Upload Image</h3>
        <input type="file" onChange={upload} className={"custom-file-input"}/>
    </div>)
}

export default UploadPic
