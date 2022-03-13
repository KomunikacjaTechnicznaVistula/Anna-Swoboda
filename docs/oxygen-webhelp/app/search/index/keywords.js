define(function() {var keywords=[{w:"my",p:["p0","p7","p8","p9","p10"]},{w:"first",p:["p0","p7"]},{w:"map",p:["p0"]},{w:"concept1",p:["p1"]},{w:"f",p:["p1"]},{w:"concept2",p:["p2"]},{w:"concept3",p:["p3"]},{w:"doing",p:["p4","p5","p6"]},{w:"more",p:["p4"]},{w:"stuff",p:["p4"]},{w:"3",p:["p4"]},{w:"something",p:["p5","p6"]},{w:"else2",p:["p6"]},{w:"reference",p:["p7","p8","p9","p10"]},{w:"fourth",p:["p8"]},{w:"second",p:["p9"]},{w:"third",p:["p10"]}];
var ph={};
ph["p0"]=[0, 1, 2];
ph["p1"]=[3, 4];
ph["p2"]=[5];
ph["p3"]=[6];
ph["p4"]=[7, 8, 9, 10];
ph["p5"]=[7, 11];
ph["p6"]=[7, 11, 12];
ph["p7"]=[0, 1, 13];
ph["p8"]=[0, 14, 13];
ph["p9"]=[0, 15, 13];
ph["p10"]=[0, 16, 13];
     return {
         keywords: keywords,
         ph: ph
     }
});
