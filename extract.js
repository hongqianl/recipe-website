const mammoth = require('mammoth');

mammoth.extractRawText({path: 'recipe.docx'})
    .then(function(result){
        console.log(result.value);
    })
    .catch(function(error) {
        console.error(error);
    });