var  searchFunc  =  函数 （路径， search_id ， content_id ） { 
    控制台。日志（“测试” ）；
    //'使用严格'; 
    $ 。ajax （{ 
        url ： path ， 
        dataType ： “ json” ， 
        success ： function  （ datas ） { 
            //从搜索数据中获取内容
            // var datas = $（“ entry”，xmlResponse）.map（function（）{ 
            //返回{
            //标题：$（“ title”，此）.text（），
            //内容：$（“ content”，此）.text（），
            //网址：$（“ url”，此）.text（）
            //}; 
            //}）。get（）; 
            // console.log（xmlResponse）; 
            控制台。日志（“测试！” ）；
            
            控制台。日志（数据）; 
            var $ input = document 。getElementById （ search_id ）; 
            var $ resultContent = document 。getElementById （ content_id ）; 
            $ input 。addEventListener （'input' ， function  （） { 
                var str =  '<ul class = \“ search-result-list \”>' ; 
                var关键字=  this。价值。修剪（）。toLowerCase （）。分割（/ [\ s \-] + / ）; 
                $ resultContent 。innerHTML =  “” ; 
                如果 （此。值。修剪（）。长度<=  0 ） { 
                    返回; 
                } 
                //执行本地搜索 
                数据。forEach （函数 （数据） {
                    var isMatch =  true ; 
                    var content_index =  [ ] ; 
                    var data_title = data 。标题。修剪（）。toLowerCase （）; 
                    var data_content = data 。内容。修剪（）。替换（/ <[^>] +> / g ， “” ）。toLowerCase （）; 
                    var data_url =数据。网址; 
                    VAR index_title =  - 1 ; 
                    VAR index_content =  - 1 ; 
                    VAR first_occur =  - 1 ; 
                    //仅
                    当 （ data_title ！=  ''  && data_content ！=  '' ） { 
                        关键字时，才匹配标题和内容不为空的物品。forEach （函数 （关键字， i ） { 
                            index_title= data_title 。indexOf （关键字）; 
                            index_content = data_content 。indexOf （关键字）; 
                            如果 （ index_title <  0  && index_content <  0 ） { 
                                isMatch =  false ; 
                            }  else  { 
                                if  （ index_content <  0 ） { 
                                    index_content =  0; 
                                } 
                                if  （ i ==  0 ） { 
                                    first_occur = index_content ; 
                                } 
                            } 
                        } ）; 
                    } 
                    //显示搜索结果，
                    如果 （ isMatch ） { 
                        str + =  “ <li> <a href='"  + data_url +  "'class='search-result-title'>”  + data_title +  “ </a>” ; 
                        var content =数据。内容。）。替换（/ <[^>] +> / g ， “” ）; 
                        if  （ first_occur > =  0 ） { 
                            //切出100个字符
                            var start = first_occur -  20 ; 
                            var end = first_occur +  80 ; 
                            如果 （开始<  0 ） { 
                                开始=  0 ; 
                            } 
                            if  （ start ==  0 ） {
                                端=  100 ; 
                            } 
                            如果 （端>内容。长度） { 
                                端=内容。长度; 
                            } 
                            var match_content = content 。substr （开始，结束）; 
                            //突出显示所有关键字 
                            keyword 。forEach （函数 （关键字） { 
                                var regS=  新 正则表达式（关键字， “GI” ）; 
                                match_content = match_content 。替换（ regS ， “ <em class = \” search-keyword \“>”  +关键字+  “ </ em>” ）；
                            } ）;

                            str + =  “ <p class = \”搜索结果\“>”  + match_content +  “ ... </ p>” 
                        } 
                        str + =  “ </ li>” ; 
                    } 
                } ）; 
                str + =  “ </ ul>” ; 
                $ resultContent 。innerHTML = str ; 
            } ）; 
        } 
    } ）; 
}