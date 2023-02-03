**Connecting nestjs with API**

1. Open terminal
>NOTE: you can cd to anywhere you want to create your nestjs cli

2. npm i -g @nestjs/cli
3. new veridid-api
4. select npm and click enter
5. cd veridid-api
6. code ..
>To open vs code

7. navigate to src to verify the following are downloaded
> app.controller.specs.ts
> app.controller.ts
> app.modules.ts app.service.ts 
> main.ts 
> are all available

8. Open terminal inside veridid-api
9. npm run start:dev
10. click enter
>Note: the runs dev is in watch mode, any changes made, it will recompile instantly.

11. open browser and insert localhost:3000
12. click enter
>you should see the default greetings Hello World displayed OR Note: To find local host open terminal and insert Ipconfig /all for windows and from mac,
13. Type /sbin/ifconfig The second way is to insert your numerical localhost and add 3000 at the end example mine"192.168.2.52.3000

>Next,

14. stop the Hello World displayed
15. by pressing control c
>Next,

>Customize by generating modules, and new folders
16. nest generate module afj 
17. inside folder afj generated afj.module.ts will be available 
>Note: do same for controller and service nest generate controller afj nest generate service afj 
>Next,

18. check the app.module.ts to see if the afj module is imported
>NOTE: to use the rest call copy the @Get hello from app controller and paste in Afj.controller inside the class also add to import the afjservice from afj.service and then, import the strings from app.service and paste in afj.service and also in afj.controller, import controller,Get from @nestjs/common

>Once done, 
19. run npm start:dev
20. add /afj to localhost:3000 example localhost:3000/afj
>it should be showing afj configuration example: 'Hello World from VeriDid Inc!' Note: Make sure you save your code and also refresh the browser to get the latest rendering. NOTE: Noticed {"statusCode":404,"message":"Cannot GET /test", "error":"Not Found" when trying to run nestjs on my localhost, that means your connection is slow,especially when using wireless. Solution, open main.ts inside I enabled CORS (Access-Control-Allow-Origin) setting it to true (AppModule , { cors: true}); 
21. then run again please see main.ts for all the codes

>NOTE: Another note, make sure you observe the result on your terminal to identify what was mapped. Example: Added addition Call GET option test after afj, the mapped output was: Mapped {/afj/test,GET} route when checking on your browser, 
22. insert localhost:3000/afj to see aft page and,
23. localhost:3000/afj/test to see the test page
or better still 192.168.2.52.3000/afj 192.168.2.52.3000/afj/test Next, 

**Building a swagger interface**

24. stop the dev run
25. control c
26. Open nestjs documentation
27. go to recipes
28. select Swagger
29. open terminal
30. npm install --save @nest js/swagger
31. start up the application
32. npm run start:dev
33. scroll down on nestjs recipes swagger page to main.ts
34. copy form const config =new
>to
35. SwaggerModule.setup('api', app, document);
36. paste in vscode main.ts
37. rename title,description add tags
38. import {SwaggerModule,DocumentBuilder} from '@nestjs/swagger';
39. in main.ts
40. Save your entries
41. again localhost:3000/api
>Done Swagger interface is ready.

**Testing Api Calls**

>In any of the 3 calls click on the dropdown arrow select try it out tab

42. click execute button
>You should see the the responses:curl, code, response body.response headers

43. stop the dev run (control c)
44. Create additional module
45. nest generate module connection 
46. nest generate controller connection 
47. nest generate service connection 
48. Go to vscode and refresh connection folder containing module controller and services should be available 
>NOTE: the easiest way is to copy files that was working and change the names example for afj.controller.ts copy and paste in connection.controller.ts and change all >the attributes to connection from afj and so on. similarly copy from constructor to return getHello in afj controller and paster in connection. controller
>also,

49. go to afj.service.ts and 
50. copy and paste the codes example the "getHello" to connection.ts 
51. change all afj entries to connection
52. save
53. run npm run start:dev
54. refresh swagger interface
>Result connection should be there Now we have 3 modules, APP, AFJ and CONNECTION each of which could work independently since the all contain Module, Controller, and service, this will make things easier when creating new classes. 

>Next, we try and POST we can use it to pass info for this let use the AFJ module

>in the nestjs documentation go to controllers use the cats.controller.ts examples for @POST

>Overview/Controller
>example: @Post("create")
>return this.afjService.create;create(): string {
>return 'This action adds a new name'; }
>also add Post to the import in afj.service.ts

55. run npm run start:dev
56. refresh swagger
57. Post added to swagger api
58. Create Parameters by Creating a DTO class
59. inside the afj folder, 
60. create a folder call it dto
61. inside the dto folder create a file named create.dto.ts
>copy example from create-cat.dto.ts and paste in the newly created file
62. rename it create-AFJ.dto
>since we are doing Api
63. change strings to name, port, endpoint
64. Navigate to afj controller @Post to modify the calls
65. @Post("create")create(@Body() createAfjDto: CreateAfjDto): string {
>return 'This action adds a new name'; }
66. run npm run start:dev
67. open localhost:3000/api
>NOTE: this is to check the dto class entry Next:

68. check if the post works in swagger 
69. click Post, 
70. select try it out
71. copy name: port: endpoint:
>from createdto file
72. paste in
73. POST request body as
>example { "name":"Christopher", "port":8000, "endpoint":"192.168.2.41:3000", }

74. click execute tab
>response body
>This action adds new name should show
75. Verify if you can view the response on the console
76. Go to afj.controller.ts
>second line on the @Post(create)
>add
>console.log("DTO is:", createAfjDto);
77. save it
78. and refresh complier
79. go to POST in swagger
80. Click clear Tab
81. Click the execute tab
>NOTE: this is to run the request again navigate to terminal and check response 
>NOTE: DTO is: {'name:'Christopher', port:8000, endpoint:'192.168.2.41:3000'} should appear.

**Putting Default into Swagger interface**

>NOTE: other example uses npm install class-validator but and using nestjs specific

82. npm i @nestjs/class-validator
83. update createAfjDto file with the following data
84. import {ApiProperty } from '@nestjs/swagger';
85. import { IsString, IsInt, IsNotEmpty } from 'class-validator';
86. export class CreateAfjDto{ @ApiProperty({ default: 'Christopher'}) @IsString() @IsNotEmpty() readonly name: string;
>@ApiProperty({ default: '8000'}) @IsNumber() @IsNotEmpty() readonly port: number;
>@ApiProperty({ default:'192.168.2.41:3000'}) @IsString() readonly endpoint: string;
}

>NOTE: The reason for the default value is because each properties has to be specific values as in in default value, example if a properties is a string, you cannot
>put a number, or if its a name you cannot put a string as son on

>NETWORKING: taking every properties will look at it later.

**Making a service call**

87. go to controller.ts
88. @POST add under return
89. return this.afjService.create() 87.Also copy import {CreateAfjDto} from './dto/createafj.dto and paste in afj.service.ts file
>also

90. make a new call in the afj.service.ts
91. create(createDto:CreateAfjDto): string {
92. console.log("Service call DTO:",createDto)
93. return "Hello"; }
>Next:

94. Go back to swagger api POST and execute the call
>NOTE:Best Practice, configure DTO for every single call we have it is cleaner and better to understand,manage, integrate and trace.

**Using Request URL in Postman ****
95. Open postman 94. create a new collection

>example: veridid-api

96. add a new call example add a POST
>NOTE: select Post from drop menu

97. paste the url address from swagger http://192.168.2.41:3000/afj/create 97
98. click Body and select raw, JSON 98.Navigate back to swagger and copy the JSON used example { "name":"Christopher", "port":8000, "endpoint":"192.168.2.41:3000", }
99. paste JSON in Postman
>and

100. Click send
101. Response will be -- Hello
102. Adding entry to Post man request
103. add name to christopher to include Christopher Oladimeji
>on same JSON used as example
104. click send and check the console in your vscode Terminal
105. result-- service call DTO (name:'Christopher Oladimeji',port:8000, endpoint: '192.168.2.41:3000')# nestjs-api

 
