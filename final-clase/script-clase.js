
const menuEmail = document.querySelector('.navbar-email');
const deskTopMenu = document.querySelector('.desktop-menu');
const menuCartIcon = document.querySelector('.navbar-shoppinng-cart');
const menuIconMobile = document.querySelector('.menu-icon-mobile');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
const body = document.querySelector('body');
const asideProductDetail = document.querySelector('.product-detail-secondary');
const closeIconProductDetail = document.querySelector('.product-detail-close');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuIconMobile.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleAside);
closeIconProductDetail.addEventListener('click', closeProductDetail);


// forma para cerrar los menu cuando se abra uno nuevo
function toggleDesktopMenu(event) {
	event.stopPropagation(); // para que la funcion close no la cierre al detectar el evento click propagado
	//console.log(event); // muesta en consola el evento click, se muestra informacion importante de el click, la ubicacion y mas datos
	mobileMenu.classList.add('inactive'); // .classList.add agrega una clase si no la tiene.
	aside.classList.add('inactive');
	asideProductDetail.classList.add('inactive');
	deskTopMenu.classList.toggle('inactive'); // .classList.toggle agrega una clase si no la tiene, y quita si la tiene.

	body.addEventListener('click', close); // para que se cierre al hacer click fuera
}

function toggleMobileMenu(event) {
	event.stopPropagation();
	aside.classList.add('inactive');
	deskTopMenu.classList.add('inactive');
	asideProductDetail.classList.add('inactive');
	mobileMenu.classList.toggle('inactive');
}

function toggleAside(event) {
	event.stopPropagation();
	deskTopMenu.classList.add('inactive');
	mobileMenu.classList.add('inactive');
	asideProductDetail.classList.add('inactive');
	aside.classList.toggle('inactive');
}

function openProductDetailAside() {
	deskTopMenu.classList.add('inactive');
	mobileMenu.classList.add('inactive');
	aside.classList.add('inactive');
	asideProductDetail.classList.remove('inactive');
}

function closeProductDetail() {
	asideProductDetail.classList.add('inactive');
}

// funcion para cerrar cuando se haga un click fuera, falta ajustar un poco mas para que funcione como se desea
function close() {
	aside.classList.add('inactive');
	deskTopMenu.classList.add('inactive');
	mobileMenu.classList.add('inactive');
	body.removeEventListener('click', close)
}

// forma mostrada en clase de como cerrar los menu cuando se abra uno nuevo
/*

function toggleDesktopMenu() {
	const isAsideClose = aside.classList.contains('inactive');
	const isMobileMenuClose = mobileMenu.classList.contains('inactive');

	if (!isAsideClose) {
		aside.classList.add('inactive');
	}
	if (!isMobileMenuClose) {
		mobileMenu.classList.add('inactive');
	}

	deskTopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
	const isDesktopMenuClose = deskTopMenu.classList.contains('inactive');
	const isAsideClose = aside.classList.contains('inactive');

	if (!isDesktopMenuClose) {
		deskTopMenu.classList.add('inactive');
	}
	if (!isAsideClose) {
		aside.classList.add('inactive');
	}

	mobileMenu.classList.toggle('inactive');
}

function toggleAside() {
	const isDesktopMenuClose = deskTopMenu.classList.contains('inactive');
	const isMobileMenuClose = mobileMenu.classList.contains('inactive');

	if (!isDesktopMenuClose) {
		deskTopMenu.classList.add('inactive');
	}
	if (!isMobileMenuClose) {
		mobileMenu.classList.add('inactive');
	}

	aside.classList.toggle('inactive');
}

*/

const productList = [];
productList.push({
	name: 'Bike',
	price: 200,
	img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
	name: 'Smart TV',
	price: 400,
	img: 'https://www.almacenestropigas.com/media/catalog/product/4/5/457555100011_1.jpg?width=700&height=700&store=el_salvador_kiosco_espanol&image-type=image',
});
productList.push({
	name: 'Motorcycle',
	price: 1000,
	img: 'https://www.motorcyclistonline.com/resizer/PNfKT-hcEIkq2mUyLsVjVGpzbOE=/1440x0/filters:focal(1014x686:1024x696)/cloudfront-us-east-1.images.arcpublishing.com/octane/SPX4C4PLSZFZXMLB5VETRRU7PA.jpg',
});
productList.push({
	name: 'Laptop',
	price: 1500,
	img: 'https://dlcdnwebimgs.asus.com/gain/096bd769-b48d-41ea-9eb5-7d305aa8a6fe/w800',
});
productList.push({
	name: 'PC Computer',
	price: 2000,
	img: 'https://www.computerhope.com/cdn/big/computer.jpg',
});
productList.push({
	name: 'Washing Machine',
	price: 999,
	img: 'https://www.lg.com/in/images/washing-machines/md07540887/gallery/FHM1408BDL-Washing-Machines-Front-View-D-01-v1.jpg',
});
productList.push({
	name: 'Dryer',
	price: 899,
	img: 'https://d12mivgeuoigbq.cloudfront.net/magento-media/catalog/product/a/8/a899a397-7746-4ba0-bab2-93cf7e4284a4.jpg?w=640',
});
productList.push({
	name: 'Stove',
	price: 500,
	img: 'https://cdn11.bigcommerce.com/s-dj46qhetxl/images/stencil/640w/products/123693/297579/bab2e0ea61258faf13b18b8c172cf0e6aed711ad__50728.1680838363.jpg?c=1',
});
productList.push({
	name: 'lawn mower',
	price: 300,
	img: 'https://cdn.shopify.com/s/files/1/0593/9537/5264/products/7264813809824.jpg?v=1669927995&width=713',
});
productList.push({
	name: 'blender',
	price: 50,
	img: 'https://ferreteriavidri.com/images/items/large/402476.jpg',
});


// esto es el html que se creo con codigo de JS en la funcion renderProducts
/*
		<div class="cards-container">

			<div class="product-card">
				<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
				<div class="product-info">
					<div>
						<p>$120,00</p>
						<p>Bike</p>
					</div>
					<figure>
						<img src="./icons/bt_add_to_cart.svg" alt="" class="">
					</figure>
				</div>
			</div>
		</div>

*/

function renderProducts(arr) {
	for (product of arr) {
		
		const productCard = document.createElement('div');
		productCard.classList.add('product-card');
		const productImg = document.createElement('img');
		productImg.setAttribute('src', product.img);  //  product = {name, price, image} => product.img
		productImg.addEventListener('click', openProductDetailAside);
		const productInfo = document.createElement('div');
		productInfo.classList.add('product-info');
		const productInfoDiv = document.createElement('div');
		const productPrice = document.createElement('p');
		productPrice.innerText = '$' + product.price;
		const productName = document.createElement('p');
		productName.innerText = product.name;
		const productInfoFigure = document.createElement('figure');
		const productImgCart = document.createElement('img');
		productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

		productInfoFigure.appendChild(productImgCart);

		productInfoDiv.appendChild(productPrice); // con .appendChild('') solo podemos agregar un nodo. 
		productInfoDiv.appendChild(productName);

		productInfo.append(productInfoDiv, productInfoFigure); // con .append('') podemos agregar varios nodos y texto

		productCard.append(productImg, productInfo);

		cardsContainer.append(productCard);

	};
};

renderProducts(productList);




