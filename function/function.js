// // replace xoa ky tu dau tien
//
// let str = 'abcabc';
// let del_str = str.replace('a', '');
// console.log(del_str);
// //> bcabc
//
//
// // replace xoa toan bo ky tu chi dinh
// let str1 = 'abcabc';
// let del_str1 = str1.replace(/a/g, '');
// console.log(del_str);
// //> bcbc
//
//
// // replace xoa toan bo khoang trang
// let str2 = 'a b c a b   c ';
// let del_str2 = str2.replace(/\s+/g, '');
// console.log(del_str);
// //> abcabc
//
//
//
//
// // // <!DOCTYPE html>
// // // <html lang="en">
// // //     <head>
// // //     <meta charset="UTF-8">
// // //     <meta http-equiv="X-UA-Compatible" content="IE=edge">
// // //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
// // //     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
// // //     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
// // //     <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
// // //     <title>Document</title>
// // //     </head>
// // //     <body>
// // //     <div class="row">
// // //     <div class="col-sm-6"><button class="btn btn-success" onclick="submit()">Thêm</button></div>
// // // <div class="col-sm-6"><input type="text" id="search"> <button class="btn btn-success" onclick="searchProduct()">Tìm kiếm</button></div>
// // // </div>
// // //
// // //
// // // <div id="menuProduct"></div>
// //     <script>
// class Product {
//     constructor(name, brand, cost) {
//         this.name = name;
//         this.brand = brand;
//         this.cost = cost;
//     }
//
//     getName() {
//         return this.name;
//     }
//
//     getBrand() {
//         return this.brand;
//     }
//
//     getCost() {
//         return this.cost;
//     }
//
//     setName(newName) {
//         this.name = newName;
//     }
//
//     setBrand(newBrand) {
//         this.brand = newBrand;
//     }
//
//     setCost(newCost) {
//         this.cost = newCost;
//     }
// }
//
let productA = new Product('Iphone 14', 'Apple', '35000000');
let productB = new Product('Samsung Galaxy', 'Samsung', '23000000');
let productC = new Product('Nokia 3110c', 'Nokia', '1300000');
let productD = new Product('OppoReno8', 'Oppo', '10400000');
let arr = [productA, productB, productC, productD];

function menuProduct() {
    // Lấy giá trị có tại ô search
    let keyword = document.getElementById("search").value;
    // Lấy số thứ tự cho kết quả search
    let count = 0;
    str =
        '<table class="table table-bordered">\n' +
        '<tr>\n' +
        '<th>STT</th>\n' +
        '<th>Tên sản phẩm</th>\n' +
        '<th>Hãng sản xuất</th>\n' +
        '<th>Giá tiền</th>\n' +
        '<th>Sửa</th>\n' +
        '<th>Xóa</th>\n' +
        '</tr>\n'
    for (i = 0; i < arr.length; i++) {
        // Lọc nếu ô search để trống
        if (keyword === "") {
            str +=
                '<tr>\n' +
                // STT bắt đầu từ 1
                // '<td>'+i+'</td>\n'+
                '<td>' + (i + 1) + '</td>\n' +
                '<td>' + arr[i].getName() + '</td>\n' +
                '<td>' + arr[i].getBrand() + '</td>\n' +
                '<td>' + arr[i].getCost() + '</td>\n' +
                '<td><button class="btn btn-warning" onclick="edit(' + i + ')">Sửa</button></td>\n' +
                '<td><button class="btn btn-danger" onclick="remove(' + i + ')">Xóa</button></td>\n' +
                '</tr>\n'
        }
        // Nếu ô search có giá trị, chỉ in ra các sản phẩm có tên sản phẩm chứa keyword (không tính chữ hoa chữ thường)
        else {
            if (arr[i].getName().toLowerCase().includes(keyword.toLowerCase())) {
                count++;
                str +=
                    '<tr>\n' +
                    '<td>' + count + '</td>\n' +
                    '<td>' + arr[i].getName() + '</td>\n' +
                    '<td>' + arr[i].getBrand() + '</td>\n' +
                    '<td>' + arr[i].getCost() + '</td>\n' +
                    '<td><button class="btn btn-warning" onclick="edit(' + i + ')">Sửa</button></td>\n' +
                    '<td><button class="btn btn-danger" onclick="remove(' + i + ')">Xóa</button></td>\n' +
                    '</tr>\n'
            }
        }

    }
    str += '</table>'
    document.getElementById('menuProduct').innerHTML = str;
}

menuProduct();

function submit() {
    let creatName = prompt('Nhập tên sản phẩm :');
    let creatBrand = prompt('Nhập hãng sản xuất :');
    let creatCost = prompt('Nhập giá sản phẩm :');

    let newProduct = new Product(creatName, creatBrand, creatCost);
    arr.push(newProduct);
    menuProduct();
}

function edit(value) {
    // thêm arr[value].getXXX() để cho giá trị của ô prompt bằng với giá trị cũ
    let newName = prompt('Nhập tên sản phẩm :', arr[value].getName());
    let newBrand = prompt('Nhập hãng sản xuất :', arr[value].getBrand());
    let newCost = prompt('Nhập giá sản phẩm :', arr[value].getCost());

    arr[value].setName(newName);
    arr[value].setBrand(newBrand);
    arr[value].setCost(newCost);
    menuProduct();
}

function remove(value) {
    if (confirm('Bạn muốn xóa sản phầm này')) {
        arr.splice(value, 1);
    }
    menuProduct();
}

function searchProduct() {
    menuProduct();
}
//
// // </script>
// // </body>
// // </html>
