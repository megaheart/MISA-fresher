const dialog = document.querySelector('#dialog_form');

const btnShowDialog = document.querySelector('#show_dialog');
const formInfor = document.querySelector('.form__infor');

const iconCloseDialog = document.querySelector('#icon_close-dialog');
const btnCancel = document.querySelector('#btn_cancel');

const combobox = document.querySelector('.combobox');
const selected = combobox.querySelector('.combobox__selected');
const options = combobox.querySelector('.combobox__options');
const optionItems = combobox.querySelectorAll('.combobox__option');
const inputCombobox = document.querySelector('.combobox > input');
const showCombobox = document.querySelector('.combobox > i');


const idInput = document.querySelector('#id');
const nameInput = document.querySelector('#person_name');
const department = document.querySelector('#department');
const title = document.querySelector('#title');

const genderInput = document.querySelector('input[name="gender"]');
const id_card = document.querySelector('#id_card');
const id_card_date = document.querySelector('#id_card_date');
const id_card_place = document.querySelector('#id_card_place');

const address = document.querySelector('#address');
const mobile_phone = document.querySelector('#mobile_phone');
const email = document.querySelector('#email');

const bank_account = document.querySelector('#bank_account');
const bank_name = document.querySelector('#bank_name');
const bank_branch = document.querySelector('#bank_branch');

idInput.addEventListener('input', function (e) {
    if (e.target.value === '') {
        idInput.classList.add('input__error');
    }
    else {
        idInput.classList.remove('input__error');
    }
})

nameInput.addEventListener('input', function (e) {
    if (e.target.value === '') {
        nameInput.classList.add('input__error');
    }
    else {
        nameInput.classList.remove('input__error');
    }
})

title.addEventListener('input', function (e) {
    if (e.target.value === '') {
        title.classList.add('input__error');
    }
    else {
        title.classList.remove('input__error');
    }
})


const listUnit = [
    {
        name: 'Phòng nhân sự',
        value: 'phongnhansu'
    },
    {
        name: 'Phòng kế toán',
        value: 'phongketoan'
    },
    {
        name: 'Phòng kinh doanh',
        value: 'phongkinhdoanh'
    },
    {
        name: 'Phòng kỹ thuật',
        value: 'phongkythuat'
    },
    {
        name: 'Phòng hành chính',
        value: 'phonghanhchinh'
    },
    {
        name: 'Phòng sản xuất',
        value: 'phongsanxuat'
    },
    {
        name: 'Phòng quản lý',
        value: 'phongquanly'
    },
    {
        name: 'Phòng marketing',
        value: 'phongmarketing'
    },
    {
        name: 'Phòng nghiên cứu',
        value: 'phongnghiencuu'
    },
    {
        name: 'Phòng kế hoạch',
        value: 'phongkehoach'
    },
    {
        name: 'Phòng hỗ trợ',
        value: 'phonghotro'
    },
    {
        name: 'Phòng tài chính',
        value: 'phongtaichinh'
    },
]

btnShowDialog.addEventListener('click', function () {
    dialog.classList.remove('hidden_dialog');
})
iconCloseDialog.addEventListener('click', function () {
    dialog.classList.add('hidden_dialog');
})

btnCancel.addEventListener('click', function () {
    dialog.classList.add('hidden_dialog');
})


dialog.addEventListener('click', function (e) {
    if (!dialog.classList.contains('hidden_dialog')) {
        console.log(e.target)
        if (!formInfor.contains(e.target)) {
            dialog.classList.add('hidden_dialog');
        }
    }
})

document.addEventListener('click', function (e) {
    if (options.classList.contains('show')) {
        console.log(e.target)
        console.log(options.contains(e.target))

        if (!combobox.contains(e.target)) {
            document.activeElement.blur();
            options.classList.remove('show');
        }
    }
});

function showFullCombobox() {
    if (!options.classList.contains('show')) {
        options.innerHTML = '';
        const value = inputCombobox.value;
        console.log(value)
        listUnit.filter(
            city => {
                if (!value || value === '') return true;
                return city.value.includes(filterValue)
            }
        ).forEach(function (city) {
            const option = document.createElement('div');
            option.classList.add('combobox__option');
            option.textContent = city.name;
            option.addEventListener('click', function () {
                inputCombobox.value = city.name;
                options.classList.remove('show');
            });
            options.appendChild(option);
        })
        options.classList.add('show');
    }
    else {
        options.classList.remove('show');
    }
}

showCombobox.addEventListener('click', showFullCombobox);

inputCombobox.addEventListener('mousedown', function (e) {
    e.stopPropagation();
    if (!options.classList.contains('show')) {
        showFullCombobox();
    }
})

inputCombobox.oninput = (e) => {
    options.innerHTML = '';
    options.classList.remove('show');
    const value = e.target.value;

    if (value === '') {
        showFullCombobox();
        combobox.classList.remove('input__error');
        return;
    }

    const filterValue = removeVietnameseDiacritics(value);

    const listFilter = listUnit.filter(
        city => city.value.includes(filterValue)
    )

    if (listFilter.length > 0) {
        if (combobox.classList.contains('input__error')) {
            combobox.classList.remove('input__error');
        }
        listFilter.forEach(function (city) {
            const option = document.createElement('div');
            option.classList.add('combobox__option');
            option.textContent = city.name;
            option.addEventListener('click', function () {
                inputCombobox.value = city.name;
                combobox.classList.remove('input__error');
                options.classList.remove('show');
            });
            options.appendChild(option);
        })
        options.classList.add('show');
    }
    else {
        combobox.classList.add('input__error');
        options.innerHTML = '';
        options.classList.remove('show');
    }
};

function removeVietnameseDiacritics(str) {
    if (!str) return str;
    // Chuyển đổi các ký tự có dấu thành các ký tự không dấu
    str = str.toLowerCase()
        .replace(/[áàảãạâấầẩẫậăắằẳẵặ]/g, 'a')
        .replace(/[éèẻẽẹêếềểễệ]/g, 'e')
        .replace(/[iíìỉĩị]/g, 'i')
        .replace(/[óòỏõọôốồổỗộơớờởỡợ]/g, 'o')
        .replace(/[úùủũụưứừửữự]/g, 'u')
        .replace(/[ýỳỷỹỵ]/g, 'y')
        .replace(/đ/g, 'd')
        .replace(/\s*/g, '')
        ;

    // Thay thế các ký tự không hợp lệ với dấu cách
    str = str.replace(/[^a-z0-9]/g, '');

    return str;
}

function validateForm() {
    let isValid = true;

    if (idInput.value === '') {
        idInput.classList.add('input__error');
        isValid = false;
    }
    else {
        idInput.classList.remove('input__error');
    }

    if (nameInput.value === '') {
        nameInput.classList.add('input__error');
        isValid = false;
    }
    else {
        nameInput.classList.remove('input__error');
    }

    if (department.value === '') {
        combobox.classList.add('input__error');
        isValid = false;
    }
    else {
        department.classList.remove('input__error');
    }

    if (title.value === '') {
        title.classList.add('input__error');
        isValid = false;
    }
    else {
        title.classList.remove('input__error');
    }

    // if (genderInput.value === '') {
    //     genderInput.classList.add('input__error');
    //     isValid = false;
    // }
    // else {
    //     genderInput.classList.remove('input__error');
    // }

    // if (id_card.value === '') {
    //     id_card.classList.add('input__error');
    //     isValid = false;
    // }
    // else {
    //     id_card.classList.remove('input__error');
    // }

    // if (id_card_date.value === '') {
    //     id_card_date.classList.add('input__error');
    //     isValid = false;
    // }
    // else {
    //     id_card_date.classList.remove('input__error');
    // }

    // if (id_card_place.value === '') {
    //     id_card_place.classList.add('input__error');
    //     isValid = false;
    // }
    // else {
    //     id_card_place.classList.remove('input__error');
    // }

    // if (address.value === '') {
    //     address.classList.add('input__error');
    //     isValid = false;
    // }
    // else {
    //     address.classList.remove('input__error');
    // }

    // if (mobile_phone.value === '') {
    //     mobile_phone.classList.add('input__error');
    //     isValid = false;
    // }
    // else {
    //     mobile_phone.classList.remove('input__error');
    // }

    // if (email.value === '') {
    //     email.classList.add('input__error');
    //     isValid = false;
    // }
    // else {
    //     email.classList.remove('input__error');
    // }

    // if (bank_account.value === '') {
    //     bank_account.classList.add('input__error');
    //     isValid = false;
    // }
    // else {
    //     bank_account.classList.remove('input__error');
    // }

    // if (bank_name.value === '') {
    //     bank_name.classList.add('input__error');
    //     isValid = false;
    // }
    // else {
    //     bank_name.classList.remove('input__error');
    // }

    // if (bank_branch.value === '') {
    //     bank_branch.classList.add('input__error');
    //     isValid = false;
    // }
    // else {
    //     bank_branch.classList.remove('input__error');
    // }

    return isValid;
}

const btnSave = document.querySelector('#btn_save');

btnSave.addEventListener('click', function (e) {
    e.preventDefault();
    if (validateForm()) {
        dialog.classList.add('hidden_dialog');
        resetInput()
    }
})

function resetInput() {
    idInput.value = '';
    nameInput.value = '';
    department.value = '';
    title.value = '';
    genderInput.value = '';
    id_card.value = '';
    id_card_date.value = '';
    id_card_place.value = '';
    address.value = '';
    mobile_phone.value = '';
    email.value = '';
    bank_account.value = '';
    bank_name.value = '';
    bank_branch.value = '';
}
