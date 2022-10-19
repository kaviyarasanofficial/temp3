// CAMERA SETTINGS.
Webcam.set({
    width: 240,
    height: 290,
    image_format: 'jpeg',
    jpeg_quality: 100
});
Webcam.attach('#camera');

takeSnapshot = function (oButton) {
    document.getElementById('camBox').style.display = 'block';
    document.getElementById('rowid').value = oButton.id
}

addCamPicture = function () {
    var rowid = document.getElementById('rowid').value;

    Webcam.snap(function (data_uri) {
        document.getElementById('div_' + rowid).innerHTML = 
            '<img src="' + data_uri + '" id="" width="70px" height="50px" />';
    });

    document.getElementById('rowid').value = '';
    document.getElementById('camBox').style.display = 'none';       // HIDE THE POPUP DIALOG BOX.
}