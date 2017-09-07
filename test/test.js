const expect=require('chai').expect
const platzom=require('..').default

describe('#platzom',function(){
	it('Si la palabra termina con "ar" se quitan esas dos letras',function(){
		const translation =platzom("programar")
		expect(translation).to.equal("program")
	})
	it('si la palabra inicia con z, se le añade pe al final',function(){
		const trans=platzom("zapato")
		expect(trans).to.equal("zapatope")
	})
	it('si la palabra traducida tiene 10 o más letras se debe partir en dos por la mitad y unit con un guión en medio',function(){
		const trans=platzom("abcdariosd")
		expect(trans).to.equal("abcda-riosd")
	})
	it('Si es palidromo entonces intercambia con minúsculas un mayúsculas la palabra.',function(){
		const trans=platzom("otto")
		expect(trans).to.equal("OtTo")
	})
	
})