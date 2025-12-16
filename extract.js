const mammoth = require('mammoth');

mammoth.extractRawText({path: 'c:\\Users\\hongq\\OneDrive\\Documents\\recipe.docx'})
    .then(function(result){
        console.log(result.value);
    })
    .catch(function(error) {
        console.error(error);
    });