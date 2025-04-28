const indianMenu = [
    {name: 'Paneer Butter Masala', half: '150', full: '250'},
    {name: 'Chicken Tikka Masala', half: '180', full: '300'},
    {name: 'Dal Tadka', half: '100', full: '170'},
    {name: 'Butter Naan', half: '-', full: '30'}
];

const chineseMenu = [
    {name: 'Veg Manchurian', half: '120', full: '200'},
    {name: 'Chicken Lollipop', half: '150', full: '250'},
    {name: 'Hakka Noodles', half: '100', full: '180'},
    {name: 'Schezwan Rice', half: '110', full: '190'}
];

function showMenu(type) {
    const menuContainer = document.getElementById('menu-items');
    menuContainer.innerHTML = '';
    const menu = type === 'indian' ? indianMenu : chineseMenu;

    menu.forEach(item => {
        menuContainer.innerHTML += `
            <div class="menu-item">
                <strong>${item.name}</strong> - Half: ₹${item.half} | Full: ₹${item.full}
                <br><button>Add to Cart</button>
            </div>
        `;
    });
}
