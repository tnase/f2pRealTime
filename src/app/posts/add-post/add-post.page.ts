import { AccountPage } from './../../createAccount/account/account.page';
import { Component, OnInit } from '@angular/core';
import { Crop } from '@ionic-native/crop/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.page.html',
  styleUrls: ['./add-post.page.scss'],
})
export class AddPostPage implements OnInit {

  fileUrl: any = null ;
  respData: any;

  constructor(private imagePicker: ImagePicker, private crop: Crop, private transfer: FileTransfer , private file: File ) { }

  ngOnInit() {
    

  }

  cropUpload(){
    this.imagePicker.getPictures({ maximumImagesCount: 1, outputType: 0 }).then((results) => {
      for (let i = 0; i < results.length; i++) {
          console.log('Image URI: ' + results[i]);
          this.crop.crop(results[i], { quality: 100 })
            .then(
              newImage => {
                console.log('new image path is: ' + newImage);
                const fileTransfer: FileTransferObject = this.transfer.create();
                const uploadOpts: FileUploadOptions = {
                   fileKey: 'file',
                   fileName: newImage.substr(newImage.lastIndexOf('/') + 1)
                };
  
                fileTransfer.upload(newImage, ' http://10.20.107.6:8100/assets/shapes.svg', uploadOpts)
                 .then((data) => {
                   console.log(data);
                   this.respData = JSON.parse(data.response);
                   console.log(this.respData);
                   this.fileUrl = this.respData.fileUrl;
                 }, (err) => {
                   alert(JSON.stringify(err));
                   console.log(err);
                 });
              },
              error => console.error('Error cropping image', error)
            );
      }
    }, (err) => { console.log(err); });
  }
}
