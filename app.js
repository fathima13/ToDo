var id=0,description,value;

 

    
document.querySelector('.add__btn').addEventListener('click',function() 
    {

        var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };  
    
        // get the input data
        
        description = document.querySelector('.add__description').value;
        value = document.querySelector('.add__value').value;
        id = id + 1 ;
    // create new object
    if(description !== ""  && value !== "")
        {
        var newItem =new Income(id,description,value);
        
    // add element
  var newHtml,html;
    html=  '<div class="item clearfix" id="%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button><button class="item__edit--btn"> </div></div></div>';
            
            
            
    newHtml = html.replace('%id%',newItem.id);
    newHtml = newHtml.replace('%description%',newItem.description);
    newHtml = newHtml.replace('%value%',newItem.value);
    document.querySelector('.TODO__list').insertAdjacentHTML('beforeend',newHtml);
            console.log(newHtml);
     
           
            
       //clear the input field and focus on description       
        document.querySelector('.add__description').value = "";
        document.querySelector('.add__value').value = "";
    document.querySelector('.add__description').focus();
        }
});
    
   
            
            document.querySelector('.TODO__list').addEventListener('click',function(e) {
                var itemID;
                itemID = e.target.parentNode.parentNode.parentNode.parentNode.id;
                var element = document.getElementById(itemID);
                element.parentNode.removeChild(element);
                
            });
            
    
