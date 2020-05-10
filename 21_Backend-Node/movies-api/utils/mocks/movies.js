const moviesMock = [{"id":"de93a888-d0a7-4a79-a391-fdd48d6d4faa","title":"Dead & Breakfast","year":1990,"cover":"http://dummyimage.com/111x108.bmp/cc0000/ffffff","duration":61,"contentRating":null,"source":"https://army.mil/nunc/rhoncus/dui/vel.aspx?duis=porttitor&ac=pede&nibh=justo&fusce=eu&lacus=massa&purus=donec&aliquet=dapibus&at=duis&feugiat=at&non=velit&pretium=eu&quis=est&lectus=congue&suspendisse=elementum&potenti=in&in=hac&eleifend=habitasse&quam=platea&a=dictumst&odio=morbi&in=vestibulum&hac=velit&habitasse=id&platea=pretium&dictumst=iaculis&maecenas=diam&ut=erat&massa=fermentum&quis=justo&augue=nec&luctus=condimentum&tincidunt=neque&nulla=sapien&mollis=placerat&molestie=ante&lorem=nulla&quisque=justo&ut=aliquam&erat=quis&curabitur=turpis&gravida=eget&nisi=elit&at=sodales&nibh=scelerisque&in=mauris&hac=sit&habitasse=amet&platea=eros&dictumst=suspendisse&aliquam=accumsan&augue=tortor&quam=quis&sollicitudin=turpis&vitae=sed&consectetuer=ante&eget=vivamus&rutrum=tortor&at=duis&lorem=mattis&integer=egestas&tincidunt=metus&ante=aenean&vel=fermentum&ipsum=donec&praesent=ut&blandit=mauris&lacinia=eget&erat=massa&vestibulum=tempor&sed=convallis&magna=nulla&at=neque&nunc=libero&commodo=convallis&placerat=eget&praesent=eleifend&blandit=luctus&nam=ultricies&nulla=eu&integer=nibh&pede=quisque&justo=id&lacinia=justo&eget=sit&tincidunt=amet&eget=sapien&tempus=dignissim&vel=vestibulum&pede=vestibulum&morbi=ante","tags":["Drama","Horror","Drama","Drama|Romance","Action|Adventure|Fantasy"]},
{"id":"617a5dca-f9c3-44ff-a7e5-2a909b8228e2","title":"Charade","year":2004,"cover":"http://dummyimage.com/211x215.png/cc0000/ffffff","duration":16,"contentRating":null,"source":"http://github.io/vulputate/vitae/nisl.jsp?morbi=lectus&quis=pellentesque&tortor=eget&id=nunc&nulla=donec&ultrices=quis&aliquet=orci&maecenas=eget&leo=orci&odio=vehicula&condimentum=condimentum&id=curabitur&luctus=in&nec=libero&molestie=ut&sed=massa&justo=volutpat&pellentesque=convallis&viverra=morbi&pede=odio&ac=odio&diam=elementum&cras=eu&pellentesque=interdum&volutpat=eu&dui=tincidunt&maecenas=in&tristique=leo&est=maecenas&et=pulvinar&tempus=lobortis&semper=est&est=phasellus&quam=sit&pharetra=amet&magna=erat&ac=nulla&consequat=tempus&metus=vivamus&sapien=in&ut=felis&nunc=eu&vestibulum=sapien&ante=cursus&ipsum=vestibulum&primis=proin&in=eu&faucibus=mi&orci=nulla&luctus=ac&et=enim&ultrices=in&posuere=tempor&cubilia=turpis&curae=nec&mauris=euismod&viverra=scelerisque&diam=quam&vitae=turpis&quam=adipiscing&suspendisse=lorem","tags":["(no genres listed)","Crime|Drama|Mystery|Thriller"]},
{"id":"f9e81b55-c0c9-46e6-b26c-cea7f83b1000","title":"Picture This","year":1999,"cover":"http://dummyimage.com/241x248.bmp/ff4444/ffffff","duration":96,"contentRating":null,"source":"https://unc.edu/molestie/sed/justo/pellentesque/viverra/pede/ac.html?quis=urna&justo=ut&maecenas=tellus&rhoncus=nulla&aliquam=ut&lacus=erat&morbi=id&quis=mauris&tortor=vulputate&id=elementum&nulla=nullam&ultrices=varius&aliquet=nulla&maecenas=facilisi&leo=cras&odio=non&condimentum=velit&id=nec&luctus=nisi&nec=vulputate&molestie=nonummy&sed=maecenas&justo=tincidunt&pellentesque=lacus&viverra=at&pede=velit&ac=vivamus&diam=vel&cras=nulla&pellentesque=eget&volutpat=eros&dui=elementum","tags":["Crime|Drama","Comedy","Action|Adventure|Comedy|Sci-Fi","Comedy|Crime|Drama|Romance","Action|Comedy|Romance|Sci-Fi"]},
{"id":"17bbf15b-edcd-4d56-adbc-f60a2eb7f663","title":"Sinbad of the Seven Seas","year":2001,"cover":"http://dummyimage.com/127x152.png/cc0000/ffffff","duration":32,"contentRating":null,"source":"http://state.tx.us/maecenas/rhoncus/aliquam/lacus/morbi/quis/tortor.png?aliquam=tortor&augue=risus&quam=dapibus&sollicitudin=augue&vitae=vel&consectetuer=accumsan&eget=tellus&rutrum=nisi&at=eu&lorem=orci&integer=mauris&tincidunt=lacinia&ante=sapien&vel=quis&ipsum=libero&praesent=nullam&blandit=sit&lacinia=amet&erat=turpis&vestibulum=elementum","tags":["Horror","Thriller","Drama|Thriller","Drama","Comedy|Romance"]},
{"id":"36841945-d172-4419-9e22-2e9e9ebaba9f","title":"Chain of Fools","year":2002,"cover":"http://dummyimage.com/152x154.bmp/dddddd/000000","duration":100,"contentRating":null,"source":"https://webnode.com/nibh/in/quis.jsp?turpis=eros&sed=vestibulum&ante=ac&vivamus=est&tortor=lacinia&duis=nisi&mattis=venenatis&egestas=tristique&metus=fusce&aenean=congue&fermentum=diam&donec=id&ut=ornare&mauris=imperdiet&eget=sapien&massa=urna&tempor=pretium&convallis=nisl&nulla=ut&neque=volutpat&libero=sapien&convallis=arcu&eget=sed&eleifend=augue&luctus=aliquam&ultricies=erat&eu=volutpat&nibh=in&quisque=congue&id=etiam&justo=justo&sit=etiam&amet=pretium&sapien=iaculis&dignissim=justo&vestibulum=in&vestibulum=hac&ante=habitasse&ipsum=platea&primis=dictumst","tags":["Comedy|Crime|Romance","Drama","Comedy|Musical","Comedy|Documentary"]},
{"id":"8aecfb55-d4b0-4fe7-bc79-09231cb2f607","title":"In Dreams","year":1996,"cover":"http://dummyimage.com/186x167.png/ff4444/ffffff","duration":52,"contentRating":null,"source":"http://surveymonkey.com/condimentum/curabitur/in/libero.aspx?velit=elementum&vivamus=eu&vel=interdum&nulla=eu&eget=tincidunt&eros=in&elementum=leo&pellentesque=maecenas&quisque=pulvinar&porta=lobortis&volutpat=est&erat=phasellus&quisque=sit&erat=amet&eros=erat&viverra=nulla&eget=tempus&congue=vivamus&eget=in&semper=felis&rutrum=eu&nulla=sapien&nunc=cursus","tags":["Drama|War","Comedy|Drama","Comedy|Drama","Documentary|War"]},
{"id":"d6d1566a-86fd-4e5f-8bc1-80a58af1f2f6","title":"Säg att du älskar mig","year":2010,"cover":"http://dummyimage.com/231x224.png/cc0000/ffffff","duration":60,"contentRating":null,"source":"https://ft.com/aliquam/augue/quam/sollicitudin.xml?non=curae&ligula=donec&pellentesque=pharetra&ultrices=magna&phasellus=vestibulum&id=aliquet&sapien=ultrices","tags":["Comedy|Horror"]},
{"id":"ec2d5702-0506-46ac-a701-d88c280b89c9","title":"Now or Never","year":2007,"cover":"http://dummyimage.com/162x168.png/dddddd/000000","duration":93,"contentRating":null,"source":"http://meetup.com/platea/dictumst/aliquam/augue/quam.json?aliquet=arcu&ultrices=sed&erat=augue&tortor=aliquam&sollicitudin=erat&mi=volutpat&sit=in&amet=congue&lobortis=etiam&sapien=justo&sapien=etiam&non=pretium&mi=iaculis&integer=justo&ac=in&neque=hac&duis=habitasse&bibendum=platea&morbi=dictumst&non=etiam&quam=faucibus&nec=cursus&dui=urna&luctus=ut&rutrum=tellus&nulla=nulla&tellus=ut&in=erat&sagittis=id&dui=mauris&vel=vulputate&nisl=elementum&duis=nullam&ac=varius&nibh=nulla&fusce=facilisi&lacus=cras&purus=non&aliquet=velit&at=nec&feugiat=nisi&non=vulputate&pretium=nonummy&quis=maecenas&lectus=tincidunt&suspendisse=lacus&potenti=at&in=velit&eleifend=vivamus&quam=vel&a=nulla&odio=eget&in=eros&hac=elementum&habitasse=pellentesque&platea=quisque&dictumst=porta&maecenas=volutpat&ut=erat&massa=quisque&quis=erat","tags":["Comedy|Drama|Thriller","Documentary"]},
{"id":"85acdc63-d872-42f6-b2e4-f5a0a463a061","title":"The Monastery of Sendomir","year":2004,"cover":"http://dummyimage.com/189x193.bmp/ff4444/ffffff","duration":12,"contentRating":null,"source":"http://stumbleupon.com/faucibus/cursus.js?lacinia=sed&erat=tristique&vestibulum=in&sed=tempus&magna=sit&at=amet&nunc=sem&commodo=fusce&placerat=consequat&praesent=nulla&blandit=nisl&nam=nunc&nulla=nisl&integer=duis&pede=bibendum&justo=felis&lacinia=sed&eget=interdum&tincidunt=venenatis&eget=turpis&tempus=enim&vel=blandit&pede=mi&morbi=in&porttitor=porttitor&lorem=pede&id=justo&ligula=eu&suspendisse=massa&ornare=donec&consequat=dapibus&lectus=duis&in=at&est=velit&risus=eu&auctor=est&sed=congue&tristique=elementum&in=in&tempus=hac&sit=habitasse&amet=platea&sem=dictumst","tags":["Documentary","Action|Drama","Drama","Action|Adventure|Animation","Action|Drama|Thriller"]},
{"id":"16fa23bc-2507-4979-9168-26de2d9fc001","title":"Sofia's Last Ambulance (Poslednaka lineika na Sofia)","year":2002,"cover":"http://dummyimage.com/159x226.bmp/ff4444/ffffff","duration":32,"contentRating":null,"source":"https://de.vu/lacus/at/velit/vivamus/vel/nulla.aspx?in=nibh&eleifend=quisque&quam=id&a=justo&odio=sit&in=amet&hac=sapien&habitasse=dignissim&platea=vestibulum&dictumst=vestibulum&maecenas=ante&ut=ipsum&massa=primis&quis=in&augue=faucibus&luctus=orci","tags":["Documentary","Drama|War","Horror","Drama"]}]

function filteredMoviesMock(tag) {
	return moviesMock.filter(movie => movie.tags.includes(tag));
}

class MovieServiceMock {
	async getMovies() {
		return Promise.resolve(moviesMock);
	}

	async createMovie() {
		return Promise.resolve(moviesMock[0]);
	}
}

module.exports = {
	moviesMock,
	MovieServiceMock,
	filteredMoviesMock
}