//erljs, auto-generated at {{2010,4,14},{5,44,10}}, Witold Baryluk, 2010
var module_example = [
["function","sum1",1,2,[["label",1],["func_info",["atom","example"],["atom","sum1"],1],["label",2],["gc_bif","*",["f",0],1,[["integer",2],["x",0]],["x",0]],"return"]],
["function","sum2",2,4,[["label",3],["func_info",["atom","example"],["atom","sum2"],2],["label",4],["gc_bif","+",["f",0],2,[["integer",2],["x",1]],["x",1]],["gc_bif","+",["f",0],2,[["x",1],["x",0]],["x",0]],"return"]],
["function","diff2",2,6,[["label",5],["func_info",["atom","example"],["atom","diff2"],2],["label",6],["gc_bif","-",["f",0],2,[["integer",2],["x",0]],["x",0]],["gc_bif","-",["f",0],2,[["x",0],["x",1]],["x",0]],"return"]],
["function","iloraz2",2,8,[["label",7],["func_info",["atom","example"],["atom","iloraz2"],2],["label",8],["test_heap",["alloc",[["words",0],["floats",1]]],2],["fconv",["integer",20],["fr",0]],["fconv",["x",0],["fr",1]],"fclearerror",["arithfbif","fdiv",["f",0],[["fr",0],["fr",1]],["fr",1]],["fconv",["x",1],["fr",2]],["arithfbif","fdiv",["f",0],[["fr",1],["fr",2]],["fr",1]],["fcheckerror",["f",0]],["fmove",["fr",1],["x",0]],"return"]],
["function","ntka",2,10,[["label",9],["func_info",["atom","example"],["atom","ntka"],2],["label",10],["test_heap",5,2],["put_tuple",4,["x",2]],["put",["integer",1]],["put",["x",1]],["put",["integer",5]],["put",["x",0]],["move",["x",2],["x",0]],"return"]],
["function","tailowa",1,12,[["label",11],["func_info",["atom","example"],["atom","tailowa"],1],["label",12],["move",["integer",100],["x",1]],["call_only",2,["example","ntka",2]]]],
["function","nietailowa",1,14,[["label",13],["func_info",["atom","example"],["atom","nietailowa"],1],["label",14],["allocate",0,1],["move",["integer",100],["x",1]],["call",2,["example","ntka",2]],["test_heap",3,1],["put_tuple",2,["x",1]],["put",["integer",3233]],["put",["x",0]],["move",["x",1],["x",0]],["deallocate",0],"return"]],
["function","notfqdn",1,16,[["label",15],["func_info",["atom","example"],["atom","notfqdn"],1],["label",16],["call_only",1,["example","notfqdn",1]]]],
["function","fqdn",1,18,[["label",17],["func_info",["atom","example"],["atom","fqdn"],1],["label",18],["call_ext_only",1,["extfunc","example","fqdn",1]]]],
["function","konwencje1",3,20,[["label",19],["func_info",["atom","example"],["atom","konwencje1"],3],["label",20],["test_heap",4,3],["put_tuple",3,["x",3]],["put",["x",0]],["put",["x",1]],["put",["x",2]],["move",["x",3],["x",0]],"return"]],
["function","konwencje2",3,22,[["label",21],["func_info",["atom","example"],["atom","konwencje2"],3],["label",22],["call_only",3,["example","konwencje1",3]]]],
["function","konwencje3",3,24,[["label",23],["func_info",["atom","example"],["atom","konwencje3"],3],["label",24],["allocate",0,2],["move",["x",1],["x",2]],["move",["x",0],["x",1]],["move",["atom","a"],["x",0]],["call",3,["example","konwencje1",3]],["test_heap",3,1],["put_tuple",2,["x",1]],["put",["atom","ff"]],["put",["x",0]],["move",["x",1],["x",0]],["deallocate",0],"return"]],
["function","konwencje4",3,26,[["label",25],["func_info",["atom","example"],["atom","konwencje4"],3],["label",26],["move",["x",2],["x",3]],["move",["x",1],["x",2]],["move",["x",3],["x",1]],["call_only",3,["example","konwencje1",3]]]],
["function","listy",0,28,[["label",27],["func_info",["atom","example"],["atom","listy"],0],["label",28],["move",["literal",["a","b","c"]],["x",0]],"return"]],
["function","listy2",1,30,[["label",29],["func_info",["atom","example"],["atom","listy2"],1],["label",30],["test_heap",4,1],["put_list",["x",0],["literal",["c"]],["x",1]],["put_list",["atom","a"],["x",1],["x",0]],"return"]],
["function","a",1,32,[["label",31],["func_info",["atom","example"],["atom","a"],1],["label",32],["allocate",0,1],["move",["x",0],["x",1]],["move",["atom","lists"],["x",2]],["move",["atom","a"],["x",0]],["apply_last",1,0]]],
["function","a",2,34,[["label",33],["func_info",["atom","example"],["atom","a"],2],["label",34],["move",["x",1],["x",2]],["move",["atom","lists"],["x",1]],["call_ext_only",3,["extfunc","erlang","apply",3]]]],
["function","a0",1,36,[["label",35],["func_info",["atom","example"],["atom","a0"],1],["label",36],["allocate",0,1],["move",["x",0],["x",1]],["move",["atom","lists"],["x",2]],["move",["atom","a"],["x",0]],["apply_last",1,0]]],
["function","a2",1,38,[["label",37],["func_info",["atom","example"],["atom","a2"],1],["label",38],["allocate",0,1],["move",["x",0],["x",1]],["move",["atom","lists"],["x",2]],["move",["atom","a"],["x",0]],["apply",1],["test_heap",2,1],["put_tuple",1,["x",1]],["put",["x",0]],["move",["x",1],["x",0]],["deallocate",0],"return"]],
["function","a2",2,40,[["label",39],["func_info",["atom","example"],["atom","a2"],2],["label",40],["allocate",0,2],["move",["x",1],["x",2]],["move",["atom","lists"],["x",1]],["call_ext",3,["extfunc","erlang","apply",3]],["test_heap",2,1],["put_tuple",1,["x",1]],["put",["x",0]],["move",["x",1],["x",0]],["deallocate",0],"return"]],
["function","a20",2,42,[["label",41],["func_info",["atom","example"],["atom","a20"],2],["label",42],["allocate",0,2],["move",["atom","lists"],["x",2]],["move",["x",1],["x",3]],["move",["x",0],["x",1]],["move",["x",3],["x",0]],["apply",1],["test_heap",2,1],["put_tuple",1,["x",1]],["put",["x",0]],["move",["x",1],["x",0]],["deallocate",0],"return"]],
["function","af",1,44,[["label",43],["func_info",["atom","example"],["atom","af"],1],["label",44],["move",["literal",["a",5]],["x",1]],["call_ext_only",2,["extfunc","erlang","apply",2]]]],
["function","af",2,46,[["label",45],["func_info",["atom","example"],["atom","af"],2],["label",46],["call_ext_only",2,["extfunc","erlang","apply",2]]]],
["function","af0",1,48,[["label",47],["func_info",["atom","example"],["atom","af0"],1],["label",48],["allocate",0,1],["call_fun",0],["deallocate",0],"return"]],
["function","af1",1,50,[["label",49],["func_info",["atom","example"],["atom","af1"],1],["label",50],["allocate",0,1],["move",["integer",5],["x",1]],["move",["x",0],["x",2]],["move",["integer",3],["x",0]],["call_fun",2],["deallocate",0],"return"]],
["function","af0_bug",2,52,[["label",51],["func_info",["atom","example"],["atom","af0_bug"],2],["label",52],["allocate",0,2],["move",["x",1],["x",2]],["move",["x",0],["x",1]],["move",["x",2],["x",0]],["call_fun",1],["deallocate",0],"return"]],
["function","af1_bug",2,54,[["label",53],["func_info",["atom","example"],["atom","af1_bug"],2],["label",54],["allocate",0,1],["move",["integer",5],["x",2]],["move",["integer",4],["x",1]],["move",["x",0],["x",3]],["move",["integer",3],["x",0]],["call_fun",3],["deallocate",0],"return"]],
["function","af0_bug_test",2,56,[["label",55],["func_info",["atom","example"],["atom","af0_bug_test"],2],["label",56],["allocate",0,2],["gc_bif","-",["f",0],2,[["x",1],["integer",1]],["x",1]],["move",["x",0],["x",2]],["call_fun",2],["deallocate",0],"return"]],
["function","af0_bug_start",0,58,[["label",57],["func_info",["atom","example"],["atom","af0_bug_start"],0],["label",58],["make_fun2",["example","-af0_bug_start/0-fun-0-",2],0,31541562,0],["move",["integer",100],["x",1]],["call_only",2,["example","af0_bug_test",2]]]],
["function","af2",1,60,[["label",59],["func_info",["atom","example"],["atom","af2"],1],["label",60],["allocate",0,1],["move",["literal",["a",5]],["x",1]],["call_ext",2,["extfunc","erlang","apply",2]],["test_heap",2,1],["put_tuple",1,["x",1]],["put",["x",0]],["move",["x",1],["x",0]],["deallocate",0],"return"]],
["function","af2",2,62,[["label",61],["func_info",["atom","example"],["atom","af2"],2],["label",62],["allocate",0,2],["call_ext",2,["extfunc","erlang","apply",2]],["test_heap",2,1],["put_tuple",1,["x",1]],["put",["x",0]],["move",["x",1],["x",0]],["deallocate",0],"return"]],
["function","af20",2,64,[["label",63],["func_info",["atom","example"],["atom","af20"],2],["label",64],["allocate",0,2],["move",["x",1],["x",2]],["move",["x",0],["x",1]],["move",["x",2],["x",0]],["call_fun",1],["test_heap",2,1],["put_tuple",1,["x",1]],["put",["x",0]],["move",["x",1],["x",0]],["deallocate",0],"return"]],
["function","af21",2,66,[["label",65],["func_info",["atom","example"],["atom","af21"],2],["label",66],["allocate",0,1],["move",["integer",5],["x",2]],["move",["integer",4],["x",1]],["move",["x",0],["x",3]],["move",["integer",3],["x",0]],["call_fun",3],["test_heap",2,1],["put_tuple",1,["x",1]],["put",["x",0]],["move",["x",1],["x",0]],["deallocate",0],"return"]],
["function","matche",1,68,[["label",67],["func_info",["atom","example"],["atom","matche"],1],["label",68],["test","is_tuple",["f",69],[["x",0]]],["test","test_arity",["f",70],[["x",0],2]],["move",["atom","ok"],["x",0]],"return",["label",69],["test","is_eq_exact",["f",70],[["x",0],["atom","aaa"]]],["move",["atom","dd"],["x",0]],"return",["label",70],["case_end",["x",0]]]],
["function","matche2",1,72,[["label",71],["func_info",["atom","example"],["atom","matche2"],1],["label",72],["test","is_tuple",["f",73],[["x",0]]],["test","test_arity",["f",74],[["x",0],3]],["get_tuple_element",["x",0],0,["x",1]],["get_tuple_element",["x",0],2,["x",2]],["test","is_eq_exact",["f",74],[["x",2],["integer",44]]],["move",["x",1],["x",0]],"return",["label",73],["test","is_eq_exact",["f",74],[["x",0],["atom","aa123a"]]],["move",["atom","dd"],["x",0]],"return",["label",74],["case_end",["x",0]]]],
["function","mnozacz",1,76,[["label",75],["func_info",["atom","example"],["atom","mnozacz"],1],["label",76],["make_fun2",["example","-mnozacz/1-fun-0-",2],1,93556177,1],"return"]],
["function","mnozacz2",1,78,[["label",77],["func_info",["atom","example"],["atom","mnozacz2"],1],["label",78],["make_fun2",["example","-mnozacz2/1-fun-0-",1],2,8359276,0],"return"]],
["function","mnozacz3",1,80,[["label",79],["func_info",["atom","example"],["atom","mnozacz3"],1],["label",80],["move",["atom","mnoznik2"],["x",1]],["move",["integer",1],["x",2]],["move",["atom","example"],["x",0]],["call_ext_only",3,["extfunc","erlang","make_fun",3]]]],
["function","mnoznik2",1,82,[["label",81],["func_info",["atom","example"],["atom","mnoznik2"],1],["label",82],["gc_bif","*",["f",0],1,[["integer",2],["x",0]],["x",0]],"return"]],
["function","mnozacz_big1",1,84,[["label",83],["func_info",["atom","example"],["atom","mnozacz_big1"],1],["label",84],["make_fun2",["example","-mnozacz_big1/1-fun-0-",7],3,89656627,1],["test_heap",3,1],["put_tuple",2,["x",1]],["put",["x",0]],["put",["atom","zzzzzzz"]],["move",["x",1],["x",0]],"return"]],
["function","mnozacz_big2",6,86,[["label",85],["func_info",["atom","example"],["atom","mnozacz_big2"],6],["label",86],["move",["x",3],["x",6]],["move",["x",2],["x",3]],["move",["x",6],["x",2]],["move",["x",4],["x",6]],["move",["x",1],["x",4]],["move",["x",6],["x",1]],["move",["x",5],["x",6]],["move",["x",0],["x",5]],["move",["x",6],["x",0]],["make_fun2",["example","-mnozacz_big2/6-fun-0-",7],4,32008867,6],["test_heap",3,1],["put_tuple",2,["x",1]],["put",["x",0]],["put",["atom","zzzzzzz"]],["move",["x",1],["x",0]],"return"]],
["function","mnozacz_big3",6,88,[["label",87],["func_info",["atom","example"],["atom","mnozacz_big3"],6],["label",88],["move",["x",3],["x",6]],["move",["x",2],["x",3]],["move",["x",6],["x",2]],["move",["x",4],["x",6]],["move",["x",1],["x",4]],["move",["x",6],["x",1]],["move",["x",5],["x",6]],["move",["x",0],["x",5]],["move",["x",6],["x",0]],["make_fun2",["example","-mnozacz_big3/6-fun-0-",7],5,37529022,6],["test_heap",3,1],["put_tuple",2,["x",1]],["put",["x",0]],["put",["atom","zzzzzzz"]],["move",["x",1],["x",0]],"return"]],
["function","mnozacz_big4",7,90,[["label",89],["func_info",["atom","example"],["atom","mnozacz_big4"],7],["label",90],["move",["x",2],["x",7]],["move",["x",4],["x",2]],["move",["x",7],["x",4]],["move",["x",1],["x",7]],["move",["x",5],["x",1]],["move",["x",7],["x",5]],["move",["x",6],["x",0]],["make_fun2",["example","-mnozacz_big4/7-fun-0-",7],6,43049177,6],["test_heap",3,1],["put_tuple",2,["x",1]],["put",["x",0]],["put",["atom","zzzzzzz"]],["move",["x",1],["x",0]],"return"]],
["function","mnozacz_s1",5,92,[["label",91],["func_info",["atom","example"],["atom","mnozacz_s1"],5],["label",92],["make_fun2",["example","-mnozacz_s1/5-fun-0-",2],7,72644680,0],["test_heap",3,1],["put_tuple",2,["x",1]],["put",["x",0]],["put",["atom","zzzzzzz"]],["move",["x",1],["x",0]],"return"]],
["function","mnozacz_s2",0,94,[["label",93],["func_info",["atom","example"],["atom","mnozacz_s2"],0],["label",94],["make_fun2",["example","-mnozacz_s2/0-fun-0-",2],8,2384587,0],["test_heap",3,1],["put_tuple",2,["x",1]],["put",["x",0]],["put",["atom","zzzzzzz"]],["move",["x",1],["x",0]],"return"]],
["function","mnozacz_s2",3,96,[["label",95],["func_info",["atom","example"],["atom","mnozacz_s2"],3],["label",96],["make_fun2",["example","-mnozacz_s2/3-fun-0-",2],9,66342221,0],["test_heap",3,1],["put_tuple",2,["x",1]],["put",["x",0]],["put",["atom","zzzzzzz"]],["move",["x",1],["x",0]],"return"]],
["function","mnozacz_s3",3,98,[["label",97],["func_info",["atom","example"],["atom","mnozacz_s3"],3],["label",98],["make_fun2",["example","-mnozacz_s3/3-fun-0-",2],10,117508341,0],["test_heap",3,1],["put_tuple",2,["x",1]],["put",["x",0]],["put",["atom","zzzzzzz"]],["move",["x",1],["x",0]],"return"]],
["function","mnozacz_s4",3,100,[["label",99],["func_info",["atom","example"],["atom","mnozacz_s4"],3],["label",100],["make_fun2",["example","-mnozacz_s4/3-fun-0-",2],11,34456702,0],["test_heap",3,1],["put_tuple",2,["x",1]],["put",["x",0]],["put",["atom","zzzzzzz"]],["move",["x",1],["x",0]],"return"]],
["function","odbierz",0,102,[["label",101],["func_info",["atom","example"],["atom","odbierz"],0],["label",102],["loop_rec",["f",106],["x",0]],["test","is_atom",["f",105],[["x",0]]],["select_val",["x",0],["f",105],["list",[["atom","a"],["f",103],["atom","f"],["f",104]]]],["label",103],"remove_message",["move",["atom","ok"],["x",0]],"return",["label",104],"remove_message",["move",["atom","j"],["x",0]],"return",["label",105],["loop_rec_end",["f",102]],["label",106],["wait_timeout",["f",102],["integer",1111]],"timeout",["move",["atom","kkk"],["x",0]],"return"]],
["function","odbierz2",1,108,[["label",107],["func_info",["atom","example"],["atom","odbierz2"],1],["label",108],["allocate",1,1],["move",["x",0],["y",0]],["label",109],["loop_rec",["f",112],["x",0]],["test","is_tuple",["f",110],[["x",0]]],["test","test_arity",["f",111],[["x",0],3]],["get_tuple_element",["x",0],0,["x",1]],["get_tuple_element",["x",0],1,["x",2]],["get_tuple_element",["x",0],2,["x",3]],["test","is_eq_exact",["f",111],[["x",1],["atom","a"]]],["test","is_eq_exact",["f",111],[["x",2],["y",0]]],["test","is_eq_exact",["f",111],[["x",3],["y",0]]],"remove_message",["move",["atom","ok"],["x",0]],["deallocate",1],"return",["label",110],["test","is_eq_exact",["f",111],[["x",0],["atom","f"]]],"remove_message",["move",["atom","j"],["x",0]],["deallocate",1],"return",["label",111],["loop_rec_end",["f",109]],["label",112],["wait_timeout",["f",109],["integer",1111]],"timeout",["move",["atom","kkk"],["x",0]],["deallocate",1],"return"]],
["function","fl",1,114,[["label",113],["func_info",["atom","example"],["atom","fl"],1],["label",114],["test_heap",["alloc",[["words",0],["floats",1]]],1],["fmove",["float",2.00000],["fr",0]],["fconv",["x",0],["fr",1]],"fclearerror",["arithfbif","fmul",["f",0],[["fr",0],["fr",1]],["fr",2]],["fmove",["float",5.10000],["fr",3]],["arithfbif","fadd",["f",0],[["fr",2],["fr",3]],["fr",2]],["fmove",["float",55.5000],["fr",4]],["arithfbif","fdiv",["f",0],[["fr",4],["fr",1]],["fr",5]],["arithfbif","fsub",["f",0],[["fr",2],["fr",5]],["fr",2]],["arithfbif","fnegate",["f",0],[["fr",2]],["fr",2]],["arithfbif","fdiv",["f",0],[["fr",1],["fr",2]],["fr",1]],["fcheckerror",["f",0]],["fmove",["fr",1],["x",0]],"return"]],
["function","kase",1,116,[["label",115],["func_info",["atom","example"],["atom","kase"],1],["label",116],["test","is_tuple",["f",119],[["x",0]]],["select_tuple_arity",["x",0],["f",119],["list",[2,["f",117],3,["f",118]]]],["label",117],["get_tuple_element",["x",0],0,["x",1]],["get_tuple_element",["x",0],1,["x",2]],["test","is_eq_exact",["f",119],[["x",1],["atom","b"]]],["test","is_lt",["f",119],[["x",2],["integer",13]]],["gc_bif","+",["f",0],3,[["x",2],["integer",44]],["x",0]],["test_heap",3,3],["put_tuple",2,["x",1]],["put",["atom","z"]],["put",["x",0]],["move",["x",1],["x",0]],"return",["label",118],["get_tuple_element",["x",0],0,["x",1]],["get_tuple_element",["x",0],1,["x",2]],["get_tuple_element",["x",0],2,["x",3]],["test","is_eq_exact",["f",119],[["x",1],["atom","a"]]],["test","is_eq_exact",["f",119],[["x",2],["integer",1]]],["test","is_ge",["f",119],[["x",3],["integer",33]]],["test_heap",3,4],["put_tuple",2,["x",0]],["put",["atom","c"]],["put",["x",3]],"return",["label",119],["case_end",["x",0]]]],
["function","kase2",1,121,[["label",120],["func_info",["atom","example"],["atom","kase2"],1],["label",121],["test","is_lt",["f",122],[["integer",13],["x",0]]],["move",["atom","z"],["x",0]],"return",["label",122],["test","is_lt",["f",123],[["x",0],["integer",1]]],["move",["atom","z2"],["x",0]],"return",["label",123],["test","is_ge",["f",124],[["x",0],["integer",10]]],["move",["atom","z"],["x",0]],"return",["label",124],["test","is_ge",["f",125],[["integer",4],["x",0]]],["move",["atom","z2"],["x",0]],"return",["label",125],["case_end",["x",0]]]],
["function","duzyterm",0,127,[["label",126],["func_info",["atom","example"],["atom","duzyterm"],0],["label",127],["move",["literal",[["o","p","e","r","a"],["o","p","e","r","a"]]],["x",0]],"return"]],
["function","silnia",1,129,[["label",128],["func_info",["atom","example"],["atom","silnia"],1],["label",129],["move",["integer",1],["x",1]],["call_only",2,["example","silnia",2]]]],
["function","silnia",2,131,[["label",130],["func_info",["atom","example"],["atom","silnia"],2],["label",131],["test","is_eq_exact",["f",132],[["x",0],["integer",0]]],["move",["x",1],["x",0]],"return",["label",132],["gc_bif","-",["f",0],2,[["x",0],["integer",1]],["x",2]],["gc_bif","*",["f",0],3,[["x",0],["x",1]],["x",1]],["move",["x",2],["x",0]],["call_only",2,["example","silnia",2]]]],
["function","sd",1,134,[["label",133],["func_info",["atom","example"],["atom","sd"],1],["label",134],["test_heap",["alloc",[["words",0],["floats",1]]],1],["fconv",["x",0],["fr",0]],["fconv",["integer",33],["fr",1]],"fclearerror",["arithfbif","fdiv",["f",0],[["fr",0],["fr",1]],["fr",0]],["fcheckerror",["f",0]],["fmove",["fr",0],["x",0]],"return"]],
["function","maly_div",1,136,[["label",135],["func_info",["atom","example"],["atom","maly_div"],1],["label",136],["gc_bif","div",["f",0],1,[["x",0],["integer",33]],["x",0]],"return"]],
["function","maly_minus",1,138,[["label",137],["func_info",["atom","example"],["atom","maly_minus"],1],["label",138],["gc_bif","-",["f",0],1,[["x",0]],["x",0]],"return"]],
["function","maly_rem",1,140,[["label",139],["func_info",["atom","example"],["atom","maly_rem"],1],["label",140],["gc_bif","rem",["f",0],1,[["x",0],["integer",33]],["x",0]],"return"]],
["function","maly_bbbbb",1,142,[["label",141],["func_info",["atom","example"],["atom","maly_bbbbb"],1],["label",142],["gc_bif","bor",["f",0],1,[["x",0],["integer",33]],["x",1]],["gc_bif","bnot",["f",0],2,[["x",1]],["x",1]],["gc_bif","band",["f",0],2,[["x",0],["integer",44]],["x",0]],["gc_bif","bxor",["f",0],2,[["x",1],["x",0]],["x",0]],"return"]],
["function","maly_bbbbb2",2,144,[["label",143],["func_info",["atom","example"],["atom","maly_bbbbb2"],2],["label",144],["gc_bif","bsr",["f",0],2,[["x",0],["x",1]],["x",2]],["gc_bif","bsl",["f",0],3,[["x",0],["x",1]],["x",0]],["test_heap",3,3],["put_tuple",2,["x",1]],["put",["x",2]],["put",["x",0]],["move",["x",1],["x",0]],"return"]],
["function","jss",1,146,[["label",145],["func_info",["atom","example"],["atom","jss"],1],["label",146],["move",["literal","alert('kuku')"],["x",0]],["call_ext_only",1,["extfunc","erljs","eval",1]]]],
["function","hhh",1,148,[["label",147],["func_info",["atom","example"],["atom","hhh"],1],["label",148],["test","is_nonempty_list",["f",149],[["x",0]]],["test_heap",6,1],["get_list",["x",0],["x",1],["x",2]],["put_tuple",5,["x",0]],["put",["atom","hhhhhh"]],["put",["x",1]],["put",["atom","mmmmm"]],["put",["x",2]],["put",["atom","eeeee"]],"return",["label",149],["badmatch",["x",0]]]],
["function","hhh3",1,151,[["label",150],["func_info",["atom","example"],["atom","hhh3"],1],["label",151],["test","is_nonempty_list",["f",152],[["x",0]]],["get_list",["x",0],["x",1],["x",2]],["test","is_nonempty_list",["f",152],[["x",2]]],["test_heap",8,3],["get_list",["x",2],["x",3],["x",4]],["put_tuple",7,["x",0]],["put",["atom","hhhhhh"]],["put",["x",1]],["put",["atom","mmmmm"]],["put",["x",3]],["put",["atom","mnnnnn"]],["put",["x",4]],["put",["atom","eeeee"]],"return",["label",152],["badmatch",["x",0]]]],
["function","conc",2,154,[["label",153],["func_info",["atom","example"],["atom","conc"],2],["label",154],["call_ext_only",2,["extfunc","erlang","++",2]]]],
["function","hhh4",1,156,[["label",155],["func_info",["atom","example"],["atom","hhh4"],1],["label",156],["test","is_nil",["f",157],[["x",0]]],["move",["atom","o"],["x",0]],"return",["label",157],["badmatch",["x",0]]]],
["function","zzzz",1,159,[["label",158],["func_info",["atom","example"],["atom","zzzz"],1],["label",159],["test","is_lt",["f",158],[["integer",10],["x",0]]],["gc_bif","*",["f",0],1,[["integer",2],["x",0]],["x",0]],"return"]],
["function","zzzz2",1,161,[["label",160],["func_info",["atom","example"],["atom","zzzz2"],1],["label",161],["test","is_lt",["f",162],[["integer",10],["x",0]]],["gc_bif","*",["f",0],1,[["integer",2],["x",0]],["x",0]],"return",["label",162],["test","is_lt",["f",160],[["integer",5],["x",0]]],["gc_bif","-",["f",0],1,[["integer",2],["x",0]],["x",0]],"return"]],
["function","zzzz3",2,164,[["label",163],["func_info",["atom","example"],["atom","zzzz3"],2],["label",164],["test","is_eq_exact",["f",163],[["x",1],["x",0]]],["gc_bif","-",["f",0],1,[["integer",2],["x",0]],["x",0]],"return"]],
["function","zzzz4",1,166,[["label",165],["func_info",["atom","example"],["atom","zzzz4"],1],["label",166],["test","is_eq_exact",["f",165],[["x",0],["integer",6]]],["move",["integer",2],["x",0]],"return"]],
["function","zzzz_size1",1,168,[["label",167],["func_info",["atom","example"],["atom","zzzz_size1"],1],["label",168],["gc_bif","size",["f",167],1,[["x",0]],["x",1]],["test","is_eq",["f",167],[["x",1],["integer",4]]],["move",["integer",4],["x",0]],"return"]],
["function","zzzz_size2",1,170,[["label",169],["func_info",["atom","example"],["atom","zzzz_size2"],1],["label",170],["gc_bif","size",["f",0],1,[["x",0]],["x",0]],["gc_bif","+",["f",0],1,[["integer",2],["x",0]],["x",0]],"return"]],
["function","zzzz_size3",1,172,[["label",171],["func_info",["atom","example"],["atom","zzzz_size3"],1],["label",172],["gc_bif","size",["f",0],1,[["x",0]],["x",0]],["gc_bif","+",["f",0],1,[["integer",2],["x",0]],["x",0]],"return"]],
["function","zzzz_abs",1,174,[["label",173],["func_info",["atom","example"],["atom","zzzz_abs"],1],["label",174],["gc_bif","abs",["f",0],1,[["x",0]],["x",0]],["gc_bif","+",["f",0],1,[["integer",2],["x",0]],["x",0]],"return"]],
["function","llll",1,176,[["label",175],["func_info",["atom","example"],["atom","llll"],1],["label",176],["allocate_heap",0,8,1],["put_list",["x",0],"nil",["x",1]],["put_list",["x",0],["x",1],["x",1]],["put_list",["x",0],["x",1],["x",1]],["put_list",["x",0],["x",1],["x",0]],["call_ext",1,["extfunc","lists","last",1]],["test_heap",3,1],["put_tuple",2,["x",1]],["put",["atom","ostatni"]],["put",["x",0]],["move",["x",1],["x",0]],["deallocate",0],"return"]],
["function","llll2",1,178,[["label",177],["func_info",["atom","example"],["atom","llll2"],1],["label",178],["test_heap",3,1],["put_tuple",2,["x",1]],["put",["x",0]],["put","nil"],["move",["x",1],["x",0]],"return"]],
["function","llll3",2,180,[["label",179],["func_info",["atom","example"],["atom","llll3"],2],["label",180],["allocate_zero",1,2],["gc_bif","+",["f",0],2,[["x",0],["integer",1000]],["x",2]],["move",["x",1],["y",0]],["move",["x",2],["x",1]],["call_ext",2,["extfunc","lists","seq",2]],["move",["x",0],["x",1]],["move",["y",0],["x",0]],["trim",1,0],["call_ext",2,["extfunc","lists","nthtail",2]],["test_heap",2,1],["put_tuple",1,["x",1]],["put",["x",0]],["move",["x",1],["x",0]],["deallocate",0],"return"]],
["function","llll_z",1,182,[["label",181],["func_info",["atom","example"],["atom","llll_z"],1],["label",182],["allocate_zero",1,1],["gc_bif","+",["f",0],1,[["x",0],["integer",1000]],["x",1]],["move",["x",0],["y",0]],["call_ext",2,["extfunc","lists","seq",2]],["gc_bif","+",["f",0],1,[["y",0],["integer",310]],["x",1]],["gc_bif","+",["f",0],2,[["y",0],["integer",1310]],["x",2]],["move",["x",0],["y",0]],["move",["x",1],["x",0]],["move",["x",2],["x",1]],["call_ext",2,["extfunc","lists","seq",2]],["move",["x",0],["x",1]],["move",["y",0],["x",0]],["trim",1,0],["call_ext",2,["extfunc","lists","zip",2]],["test_heap",2,1],["put_tuple",1,["x",1]],["put",["x",0]],["move",["x",1],["x",0]],["deallocate",0],"return"]],
["function","llll_u",1,184,[["label",183],["func_info",["atom","example"],["atom","llll_u"],1],["label",184],["allocate",0,1],["call",1,["example","llll_z",1]],["test","is_tuple",["f",185],[["x",0]]],["test","test_arity",["f",185],[["x",0],1]],["get_tuple_element",["x",0],0,["x",0]],["call_ext",1,["extfunc","lists","unzip",1]],["test_heap",2,1],["put_tuple",1,["x",1]],["put",["x",0]],["move",["x",1],["x",0]],["deallocate",0],"return",["label",185],["badmatch",["x",0]]]],
["function","fib1",1,187,[["label",186],["func_info",["atom","example"],["atom","fib1"],1],["label",187],["test","is_integer",["f",189],[["x",0]]],["select_val",["x",0],["f",189],["list",[["integer",1],["f",188],["integer",0],["f",188]]]],["label",188],["move",["integer",1],["x",0]],"return",["label",189],["allocate_zero",1,1],["gc_bif","-",["f",0],1,[["x",0],["integer",1]],["x",1]],["move",["x",0],["y",0]],["move",["x",1],["x",0]],["call",1,["example","fib1",1]],["gc_bif","-",["f",0],1,[["y",0],["integer",2]],["x",1]],["move",["x",0],["y",0]],["move",["x",1],["x",0]],["call",1,["example","fib1",1]],["gc_bif","+",["f",0],1,[["y",0],["x",0]],["x",0]],["deallocate",1],"return"]],
["function","fib2",1,191,[["label",190],["func_info",["atom","example"],["atom","fib2"],1],["label",191],["move",["integer",1],["x",1]],["move",["x",0],["x",2]],["move",["integer",1],["x",0]],["call_only",3,["example","fib2",3]]]],
["function","fib2",3,193,[["label",192],["func_info",["atom","example"],["atom","fib2"],3],["label",193],["test","is_eq_exact",["f",194],[["x",2],["integer",1]]],["move",["x",1],["x",0]],"return",["label",194],["gc_bif","+",["f",0],3,[["x",0],["x",1]],["x",0]],["gc_bif","-",["f",0],3,[["x",2],["integer",1]],["x",2]],["move",["x",1],["x",3]],["move",["x",0],["x",1]],["move",["x",3],["x",0]],["call_only",3,["example","fib2",3]]]],
["function","dd1",4,196,[["label",195],["func_info",["atom","example"],["atom","dd1"],4],["label",196],["allocate",2,4],["move",["x",3],["y",0]],["move",["x",2],["y",1]],["call_ext",2,["extfunc","lists","seq",2]],["move",["x",0],["x",2]],["move",["y",0],["x",1]],["move",["y",1],["x",0]],["move",["x",2],["y",1]],["trim",1,1],["call_ext",2,["extfunc","lists","seq",2]],["move",["x",0],["x",1]],["move",["y",0],["x",0]],["call_ext_last",2,["extfunc","erlang","++",2],1]]],
["function","dd2",2,198,[["label",197],["func_info",["atom","example"],["atom","dd2"],2],["label",198],["allocate",0,2],["call_ext",2,["extfunc","lists","seq",2]],["call_ext_last",1,["extfunc","lists","reverse",1],0]]],
["function","dd3",4,200,[["label",199],["func_info",["atom","example"],["atom","dd3"],4],["label",200],["allocate",2,4],["move",["x",3],["y",0]],["move",["x",2],["y",1]],["call_ext",2,["extfunc","lists","seq",2]],["move",["x",0],["x",2]],["move",["y",0],["x",1]],["move",["y",1],["x",0]],["move",["x",2],["y",1]],["trim",1,1],["call_ext",2,["extfunc","lists","seq",2]],["move",["x",0],["x",1]],["move",["y",0],["x",0]],["call_ext_last",2,["extfunc","lists","reverse",2],1]]],
["function","dd4",0,202,[["label",201],["func_info",["atom","example"],["atom","dd4"],0],["label",202],["allocate_zero",1,0],["move",["integer",20],["x",1]],["move",["integer",1],["x",0]],["call_ext",2,["extfunc","lists","seq",2]],["move",["integer",6],["x",1]],["call_ext",2,["extfunc","lists","reverse",2]],["move",["x",0],["y",0]],["move",["integer",5],["x",1]],["move","nil",["x",0]],["call_ext",2,["extfunc","lists","reverse",2]],["test_heap",3,1],["put_tuple",2,["x",1]],["put",["y",0]],["put",["x",0]],["move",["x",1],["x",0]],["deallocate",1],"return"]],
["function","dd5",0,204,[["label",203],["func_info",["atom","example"],["atom","dd5"],0],["label",204],["allocate_zero",1,0],["move",["integer",10],["x",1]],["move",["integer",1],["x",0]],["call_ext",2,["extfunc","lists","seq",2]],["move",["x",0],["y",0]],["move",["integer",46],["x",1]],["move",["integer",42],["x",0]],["call_ext",2,["extfunc","lists","seq",2]],["test_heap",4,1],["put_tuple",3,["x",1]],["put",["y",0]],["put",["x",0]],["put",["integer",5]],["move",["x",1],["x",0]],["deallocate",1],"return"]],
["function","dd6",0,206,[["label",205],["func_info",["atom","example"],["atom","dd6"],0],["label",206],["allocate",0,0],["move",["integer",10],["x",1]],["move",["integer",1],["x",0]],["call_ext",2,["extfunc","lists","seq",2]],["test_heap",2,1],["bif","tl",["f",0],[["x",0]],["x",0]],["put_tuple",1,["x",1]],["put",["x",0]],["move",["x",1],["x",0]],["deallocate",0],"return"]],
["function","dd7",0,208,[["label",207],["func_info",["atom","example"],["atom","dd7"],0],["label",208],["allocate",0,0],["move",["integer",10],["x",1]],["move",["integer",3],["x",0]],["call_ext",2,["extfunc","lists","seq",2]],["test_heap",2,1],["bif","hd",["f",0],[["x",0]],["x",0]],["put_tuple",1,["x",1]],["put",["x",0]],["move",["x",1],["x",0]],["deallocate",0],"return"]],
["function","dd8",2,210,[["label",209],["func_info",["atom","example"],["atom","dd8"],2],["label",210],["allocate",0,2],["call_ext",2,["extfunc","lists","seq",2]],["call_ext_last",1,["extfunc","lists","sum",1],0]]],
["function","random",1,212,[["label",211],["func_info",["atom","example"],["atom","random"],1],["label",212],["move","nil",["x",2]],["move",["integer",18723],["x",1]],["call_only",3,["example","random",3]]]],
["function","random",3,214,[["label",213],["func_info",["atom","example"],["atom","random"],3],["label",214],["test","is_eq_exact",["f",215],[["x",0],["integer",0]]],["move",["x",2],["x",0]],"return",["label",215],["gc_bif","-",["f",0],3,[["x",0],["integer",1]],["x",0]],["gc_bif","*",["f",0],3,[["x",1],["x",1]],["x",3]],["gc_bif","*",["f",0],4,[["x",3],["integer",17263876]],["x",3]],["gc_bif","+",["f",0],4,[["x",3],["integer",1237611]],["x",3]],["gc_bif","rem",["f",0],4,[["x",3],["integer",871263761]],["x",3]],["test_heap",2,4],["put_list",["x",1],["x",2],["x",2]],["move",["x",3],["x",1]],["call_only",3,["example","random",3]]]],
["function","dd9",1,217,[["label",216],["func_info",["atom","example"],["atom","dd9"],1],["label",217],["call_only",1,["example","random",1]]]],
["function","dd10",1,219,[["label",218],["func_info",["atom","example"],["atom","dd10"],1],["label",219],["allocate",0,1],["call",1,["example","random",1]],["call_ext_last",1,["extfunc","lists","sum",1],0]]],
["function","dd11",1,221,[["label",220],["func_info",["atom","example"],["atom","dd11"],1],["label",221],["allocate",1,1],["move",["x",0],["y",0]],["make_fun2",["example","-dd11/1-fun-0-",1],12,77949177,0],["move",["x",0],["x",1]],["move",["y",0],["x",0]],["move",["x",1],["y",0]],["call",1,["example","random",1]],["move",["x",0],["x",1]],["move",["y",0],["x",0]],["call_ext_last",2,["extfunc","lists","filter",2],1]]],
["function","dd12",1,223,[["label",222],["func_info",["atom","example"],["atom","dd12"],1],["label",223],["allocate_zero",1,1],["call_ext",1,["extfunc","example","dd9",1]],["move",["x",0],["y",0]],["call_ext",1,["extfunc","lists","sum",1]],["gc_bif","length",["f",0],1,[["y",0]],["x",1]],["test_heap",["alloc",[["words",3],["floats",1]]],2],["fconv",["x",0],["fr",0]],["fconv",["x",1],["fr",1]],"fclearerror",["arithfbif","fdiv",["f",0],[["fr",0],["fr",1]],["fr",0]],["fcheckerror",["f",0]],["fmove",["fr",0],["x",0]],["put_tuple",2,["x",1]],["put",["x",0]],["put",["float",4.35632e+8]],["move",["x",1],["x",0]],["deallocate",1],"return"]],
["function","module_info",0,225,[["label",224],["func_info",["atom","example"],["atom","module_info"],0],["label",225],["move",["atom","example"],["x",0]],["call_ext_only",1,["extfunc","erlang","get_module_info",1]]]],
["function","module_info",1,227,[["label",226],["func_info",["atom","example"],["atom","module_info"],1],["label",227],["move",["x",0],["x",1]],["move",["atom","example"],["x",0]],["call_ext_only",2,["extfunc","erlang","get_module_info",2]]]],
["function","-dd11/1-fun-0-",1,229,[["label",228],["func_info",["atom","example"],["atom","-dd11/1-fun-0-"],1],["label",229],["gc_bif","rem",["f",0],1,[["x",0],["integer",3]],["x",1]],["gc_bif","rem",["f",0],2,[["x",0],["integer",5]],["x",0]],["bif","==",["f",0],[["x",1],["x",0]],["x",0]],"return"]],
["function","-mnozacz_s4/3-fun-0-",2,231,[["label",230],["func_info",["atom","example"],["atom","-mnozacz_s4/3-fun-0-"],2],["label",231],["gc_bif","*",["f",0],2,[["x",1],["x",0]],["x",0]],["test_heap",2,2],["put_tuple",1,["x",1]],["put",["x",0]],["move",["x",1],["x",0]],"return"]],
["function","-mnozacz_s3/3-fun-0-",2,233,[["label",232],["func_info",["atom","example"],["atom","-mnozacz_s3/3-fun-0-"],2],["label",233],["gc_bif","*",["f",0],2,[["x",1],["x",0]],["x",0]],["test_heap",2,2],["put_tuple",1,["x",1]],["put",["x",0]],["move",["x",1],["x",0]],"return"]],
["function","-mnozacz_s2/3-fun-0-",2,235,[["label",234],["func_info",["atom","example"],["atom","-mnozacz_s2/3-fun-0-"],2],["label",235],["gc_bif","*",["f",0],2,[["x",1],["x",0]],["x",0]],["test_heap",2,2],["put_tuple",1,["x",1]],["put",["x",0]],["move",["x",1],["x",0]],"return"]],
["function","-mnozacz_s2/0-fun-0-",2,237,[["label",236],["func_info",["atom","example"],["atom","-mnozacz_s2/0-fun-0-"],2],["label",237],["gc_bif","*",["f",0],2,[["x",1],["x",0]],["x",0]],["test_heap",2,2],["put_tuple",1,["x",1]],["put",["x",0]],["move",["x",1],["x",0]],"return"]],
["function","-mnozacz_s1/5-fun-0-",2,239,[["label",238],["func_info",["atom","example"],["atom","-mnozacz_s1/5-fun-0-"],2],["label",239],["gc_bif","*",["f",0],2,[["x",1],["x",0]],["x",0]],["test_heap",2,2],["put_tuple",1,["x",1]],["put",["x",0]],["move",["x",1],["x",0]],"return"]],
["function","-mnozacz_big4/7-fun-0-",7,241,[["label",240],["func_info",["atom","example"],["atom","-mnozacz_big4/7-fun-0-"],7],["label",241],["gc_bif","*",["f",0],7,[["x",1],["x",0]],["x",0]],["test_heap",7,7],["put_tuple",6,["x",1]],["put",["x",0]],["put",["x",6]],["put",["x",5]],["put",["x",4]],["put",["x",3]],["put",["x",2]],["move",["x",1],["x",0]],"return"]],
["function","-mnozacz_big3/6-fun-0-",7,243,[["label",242],["func_info",["atom","example"],["atom","-mnozacz_big3/6-fun-0-"],7],["label",243],["gc_bif","*",["f",0],7,[["x",1],["x",0]],["x",0]],["test_heap",7,7],["put_tuple",6,["x",1]],["put",["x",0]],["put",["x",6]],["put",["x",5]],["put",["x",4]],["put",["x",3]],["put",["x",2]],["move",["x",1],["x",0]],"return"]],
["function","-mnozacz_big2/6-fun-0-",7,245,[["label",244],["func_info",["atom","example"],["atom","-mnozacz_big2/6-fun-0-"],7],["label",245],["gc_bif","*",["f",0],7,[["x",6],["x",0]],["x",0]],["test_heap",7,7],["put_tuple",6,["x",6]],["put",["x",0]],["put",["x",5]],["put",["x",4]],["put",["x",3]],["put",["x",2]],["put",["x",1]],["move",["x",6],["x",0]],"return"]],
["function","-mnozacz_big1/1-fun-0-",7,247,[["label",246],["func_info",["atom","example"],["atom","-mnozacz_big1/1-fun-0-"],7],["label",247],["gc_bif","*",["f",0],7,[["x",6],["x",0]],["x",0]],["test_heap",7,7],["put_tuple",6,["x",6]],["put",["x",0]],["put",["x",1]],["put",["x",2]],["put",["x",3]],["put",["x",4]],["put",["x",5]],["move",["x",6],["x",0]],"return"]],
["function","-mnozacz2/1-fun-0-",1,249,[["label",248],["func_info",["atom","example"],["atom","-mnozacz2/1-fun-0-"],1],["label",249],["call_only",1,["example","mnoznik2",1]]]],
["function","-mnozacz/1-fun-0-",2,251,[["label",250],["func_info",["atom","example"],["atom","-mnozacz/1-fun-0-"],2],["label",251],["gc_bif","*",["f",0],2,[["x",1],["x",0]],["x",0]],"return"]],
["function","-af0_bug_start/0-fun-0-",2,253,[["label",252],["func_info",["atom","example"],["atom","-af0_bug_start/0-fun-0-"],2],["label",253],["test","is_eq_exact",["f",254],[["x",1],["integer",0]]],["move",["atom","ok"],["x",0]],"return",["label",254],["allocate",0,2],["gc_bif","-",["f",0],2,[["x",1],["integer",1]],["x",1]],["move",["x",0],["x",2]],["call_fun",2],["deallocate",0],"return"]]
];
