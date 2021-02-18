//# sourceURL=fomrStyle.js

(function(){

FormStyle = function(){
	
}

FormStyle.prototype.ViewDataLoad = function(){
	var obj = this;

	var radioData1 = [{Id:1,Name:"option1"},{Id:2,Name:"option2"},{Id:3,Name:"option3"}];
	$("#radio-demo1").InitRadio(radioData1);

	var checkData1 = [{Id:"1",Name:"tag1"},{Id:"2",Name:"tag2"},{Id:"3",Name:"tag3"}];
	$("#check-demo1").InitCheckbox(checkData1);
	$("#check-tags").InitCheckbox(checkData1);

	var selectData1 = [{Id:"1",Name:"aaaaaaabcd"},{Id:"2",Name:"bbbbbbbbefg"},{Id:"3",Name:"ccccccchijk"},{Id:"4",Name:"dddddddlmn"},{Id:"5",Name:"eeeeeeexyz"},{Id:"6",Name:"fffffff"}];
	$("#select-demo1").InitSelect(selectData1);
	$("#select-search").InitSelect(selectData1,{search:true});

	var deptData=[{Id:"1",Name:"Developemnt"},{Id:"2",Name:"Marketing"},{Id:"3",Name:"Technology"},{Id:"4",Name:"Finance"}];
	$("#select-dept").InitSelect(deptData,{change:obj.DeptChange});

	FormStyle.postData = [
		{Pid:"1",Post:[{Id:"1",Name:"dept1-child1"},{Id:"2",Name:"dept1-child2"},{Id:"3",Name:"dept1-child3"}]},
		{Pid:"2",Post:[{Id:"21",Name:"Market-child1"},{Id:"22",Name:"Market-child2"},{Id:"23",Name:"Market-child3"}]},
		{Pid:"3",Post:[{Id:"31",Name:"Technology-child1"},{Id:"32",Name:"Technology-child2"},{Id:"33",Name:"Technology-child3"},{Id:"34",Name:"Technology-child4"}]}
	]
	$("#select-post").InitSelect();

	var sexData = [{Id:1,Name:"man"},{Id:2,Name:"woman"}];
	$("#man-raido").InitRadio(sexData,{checked:0});
}

FormStyle.prototype.DeptChange = function(v){
	var dept2post = FormStyle.postData.filter(function(d){return d.Pid == v.id;});
	var post = dept2post.length==1 ? dept2post[0].Post : [];
	$("#select-post").UpdateSelect(post);
}

})();