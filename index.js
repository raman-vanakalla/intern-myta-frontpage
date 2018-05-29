//data 
var data=  {
   "status":0,
   "data":
   {
        "childOrderingArray":[0,1,2],
        "list":
            [
              {
                "isEnabled":true,
                "childOrderingArray":[0,1],
                "subjectList":
                    [
                      {
                        "isEnabled":true,
                        "childOrderingArray":[0],
                        "subSubjectList":
                          [
                            {
                              "isEnabled":true,
                              "childOrderingArray":[0],
                              "chapterList":
                              [
                                {
                                  "isEnabled":true,
                                  "childOrderingArray":[],
                                  "_id":"5ae7e3efbd32e6000442c24c",
                                  "name":"Electric Field",
                                  "mappedChapterId":"5ae7e3efbd32e6000442c24b"
                                }
                              ],
                              "_id":"5ae7e3d2bd32e6000442c249",
                              "name":"Physics"
                            }
                          ],
                        "_id":"5ae7e3c6bd32e6000442c247",
                        "name":"Science"
                      },
                      {
                         "isEnabled":true,
                         "childOrderingArray":[],
                         "subSubjectList":[],
                         "_id":"5ae802c8c9dd2b0004bfe691",
                         "name":"Social Study"
                      }
                    ],
                "_id":"5ae7e3bfbd32e6000442c245",
                "name":"Grade 12"
             },
            {
                "isEnabled":true,
                "childOrderingArray":[0],
                "subjectList":
                  [
                    {
                      "isEnabled":true,
                      "childOrderingArray":[0,1],
                      "subSubjectList":
                          [
                            {
                               "isEnabled":true,
                               "childOrderingArray":[],
                               "chapterList":[],
                               "_id":"5ae80d74c9f010000405b86f",
                               "name":"History"
                            },
                            {
                              "isEnabled":true,
                              "childOrderingArray":[0],
                              "chapterList":
                              [
                                {
                                   "isEnabled":true,
                                    "childOrderingArray":[],
                                    "_id":"5ae999c378d1ad0004cc3446",
                                    "name":"Development",
                                    "mappedChapterId":"5ae999c378d1ad0004cc3445"
                                }
                              ],
                                "_id":"5ae9993178d1ad0004cc3443",
                                  "name":"Economics"
                              }
                          ],
                      "_id":"5ae80d5cc9f010000405b86d",
                        "name":"Social Studies"
                    }
                  ],
                    "_id":"5ae80242c9dd2b0004bfe681",
                    "name":"Grade 10"
                },
                {
                  "isEnabled":true,
                  "childOrderingArray":[0],
                  "subjectList":
                      [
                        {
                          "isEnabled":true,
                          "childOrderingArray":[0,1],
                          "subSubjectList":
                             [
                                {
                                  "isEnabled":true,
                                  "childOrderingArray":[0,1],
                                  "chapterList":
                                  [
                                    {
                                       "isEnabled":true,
                                       "childOrderingArray":[],
                                       "_id":"5ae80eb6c9f010000405b87f",
                                       "name":"French Revolution",
                                       "mappedChapterId":"5ae80eb6c9f010000405b87e"
                                    },
                                    {
                                       "isEnabled":true,
                                       "childOrderingArray":[],
                                       "_id":"5ae9927778d1ad0004cc3441",
                                       "name":"What is democracy ? Why democracy ?",
                                       "mappedChapterId":"5ae9927778d1ad0004cc3440"
                                    }
                                  ],
                                  "_id":"5ae80ea6c9f010000405b87c",
                                  "name":"History"
                              },
                              {
                                "isEnabled":true,
                                "childOrderingArray":[0],
                                "chapterList":
                                    [
                                      {
                                          "isEnabled":true,
                                          "childOrderingArray":[],
                                          "_id":"5ae82bf39a089f0004ce20fd",
                                          "name":"The Story of Village Palampur",
                                          "mappedChapterId":"5ae82bf39a089f0004ce20fc"
                                      }
                                    ],
                                "_id":"5ae82bd89a089f0004ce20fa",
                                 "name":"Economics"
                              }
                             ],
                          "_id":"5ae80e98c9f010000405b87a",
                            "name":"Social Studies"
                        }
                      ],
                  "_id":"5ae802c7c9dd2b0004bfe68f",
                   "name":"Grade 9"
               }
           ],
    "_id":"5ae7e37bbd32e6000442c241",
    "__v":31
    }
}


$('.menubutton').on('click',function(event){openmenu(event);});

function openmenu(event)
{
   alert(event.target.classList.contain('select'));
}

var grade=null;
var sub=null;
var subsub=null;
//this function is called on loading the page...it updates the grades dropdown
function load()
{
  data['data'].list.map(function(val)
  {
      
      var g=val.name;
      var add='<option value="'+g+'">'+g+'</option>';
      $('.grade').append(add);
  });
}
//this function updates the subjects dropdown on clicking any grade
function setsubs(grade)
{
  
     $('.sub').html('');
     $('.sub').append('<option value="no">SUBJECTS</option>');
  data['data'].list.map(function(val)
   {
      if(val.name==grade)
      {
       
        val.subjectList.map(function(v)
        {
            var s=v.name;
            
            var add='<option value="'+s+'">'+s+'</option>';
            $('.sub').append(add);
        });
      }
   });
}

//it updates the subsubjects in navigation bar on clicking the the subject
function subsubs(subject)
{
  if(window.innerWidth>1024)
  {
      $('.side').html('');
      $('.side').append(' <h1><b>LOGO</b></h1>  <h4><b>CONTENTS</b></h4>');
  }
  else if(window.innerWidth<768)
  {
      $('#navi').html('');
  }

  var e=document.getElementsByClassName('grade')[0];
  var gra=e.options[e.selectedIndex].value;
  grade=gra;
  sub=subject;
 
  
   data.data.list.map(function(val)
   {
      if(val.name==gra)
      {
      val.subjectList.map(function(va){
          if(va.name==subject)
          {
             $('#sel').html("");
             va.subSubjectList.map(function(v)
             {
                subsub=v.name;
                if(window.innerWidth<=768)
                {
                    var s='<a class="chap">'+v.name+'</a>';
                    $('#mySidenav').append(s);
                    $('#mySidenav').append('<div ><ul id="'+v.name+'" class="chapter"></ul></div>');
                    $('.chap').on('click',{subsub:v.name},showit);
                    v.chapterList.map(function(c)
                    {
                       console.log(c);
                       $('#'+v.name).append('<li><a >'+c.name+'</a></li>');
                    });
                }
                else if(window.innerWidth>=1024)
                {
                    var s='<p ><b class="subsub" >'+v.name+'</b></p>';
                    subsub=v.name;
                    $('.side').append(s);
                    $('.side').append('<div ><ul id="'+v.name+'" class="chapter"></ul></div>');
                    $('.subsub').on('click',{subsub:v.name},expand);
                }
             });
          }
      });
    }
   });
}

function showit(event)
{
  event.stopPropagation();
    event.stopImmediatePropagation();
   var s=event.data.subsub;
  if($('#'+s).css("display")=='none')
  {
     $('#'+s).css("display","block");
  }
  else
  {
     $('#'+s).css("display","none");
  }
}

//this updates the chapters pertaining to the grade ,subject,and subs
function expand(event)
{
    console.log(grade);
    console.log(sub);
    console.log(subsub);
    event.stopPropagation();
    event.stopImmediatePropagation();
    q=event.data.subsub;
    data.data.list.map(function(val)
   {
      if(val.name==grade)
      {
      val.subjectList.map(function(va){
          if(va.name==sub)
          {
             va.subSubjectList.map(function(v)
             {
                if(v.name==q)
                {

                    if(v.chapterList.length==0)
                    {
                       $('#'+q).append('<p class="no">No Chapters Found!</p>');
                    }
                    v.chapterList.map(function(c){
                      console.log(c);
                        $('#'+q).append('<li><a >'+c.name+'</a></li>');
                    });
                }
             });
          }
      });
    }
   });
    
}
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

load();





