function GetFood()
{
//    var foodArray = ["pizza","apple","orange","burrito",
//    					"cake","soda","poptarts","guacamole",
//    					"taco","hamburger","casserole","pickle",
//    					"salad","mashed potatoes", "corn", "meatloaf",
//    					"Gyro","roast beef sandwich", "egg rolls",
//    					"fresh fruit","apple pie", "spaghetti", "lo mein",
//    					"Pho Dac Beit", "Jollof Rice", "Stir Fry", "Pad Thai" 
//    					];
	
	var foodArray = ["Brickson, Margaret A"
"Loos, Jessica L"
"Macgregor, Stephen J"
"Fischer, Melinda C"
"VanHuysse, Christopher S"
"Blackwell, Nafeesa D"
"Reid, Donnette L"
"Dunlap, Laura M"
"Villalovos, Lawrence D"
"Lorence, Margaret M"
"Nichols, Megan K",
"Anderson, Nathan C",
"Neale, Patty J",
"Anderson, Robert F",
"Musallam, Samir",
"Russell, Sara J",
"Huynh, Vi M",
"Sunde, Tyrone J",
"Lowe, Pamela R",
"Childers, Melissa",
"Moore, Brian P",
"Maya, Ana L",
"Glendening, Christopher J",
"Mishica, Nathaniel J",
"Hinson, Wallace E",
"Xiong, Yia",
"Le, Sarina E",
"Stout, Gary E",
"Phoenix, Brian R",
"Gomez, Maureen",
"Angeles, Emily M",
"Moore, Timothy J",
"Hunt, Matthias B",
"Ige, Olukayode",
"Morris, Christopher H",
"Burkett, Erick A",
"Cole, Stacy L",
"Singh, Anna 'Chrissy' C",
"Pedersen, Alyssa R",
"Knop, Megan N",
"Hunter, Angela T",
"Kwabi, Kweku O",
"Stutzman, Laurie A",
"Gray, Jennifer S",
"Watson, Erica M"]

   var random = foodArray[Math.floor(Math.random() * foodArray.length)];
   document.getElementById("message").innerHTML = random;
   
}


$('.btn').click(function(){
		var $this = $(this);
		$this.toggleClass('btn');
		if($this.hasClass('btn')){
			$this.text('Eat..');			
		} else {
			$this.text('Something Else...');
		}

	});

function randomize(){
	document.getElementById('message').style.color = randomColors();
}

function randomColors(){
	return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function getName(){
	var person = prompt("What is your name?", "");

	if(person != null){
		document.getElementById("name").innerHTML =  person + ", Click the button to decide what to eat!";
	}
	
}





