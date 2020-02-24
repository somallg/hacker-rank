# Doc va phan tich yeu cau
Cho 1 ban co caro. Kiem tra xem ai la nguoi thang?

# Quan sat va dua ra nhan xet, y tuong de giai quyet bai toan
Cach giai quyet duy vao nhieu truong hop:
1. Neu ta muon kiem tra nhieu lan ma khong biet nuoc di
2. Neu ta biet gia tri cua nuoc di cuoi cung
3. Giai quyet cho ban co 3x3
4. Quai quyet cho ban con tong quat nxn

# Cac cach giai quyet
1. Neu ta muon kiem tra nhieu lan ma khong biet nuoc di 
=> ban co 3x3 = 9 o. Voi moi o co 3 kha nang: quan x, quan o, chua co quan nao di. Do do, co 3**9 ~ 20000 kha nan
Do do to bieu dien ban co duoi dang cong thuc c = 3^0 * v0 + 3^1 * v1 + ... + 3^8 * v8
Voi v0 = 0 neu khong co quan nao di, 1 neu quan x, 2 quan o.
Voi moi c ta luu gia tri vao map<number, boolean>.
Va moi lan can kiem tra ta chi can goi la gia tri trong map

2. Neu ta biet gia tri cua nuoc di cuoi, ta co the giai quyet bang cach kiem tra dong, cot va hang cheo di qua vi tri cuoi.

3. Giai quyet voi ban co 3x3
Voi ban co 3x3, ta chi can kiem tra 3 hang ngang, 3 hang doc, va 2 duong cheo neu tat ca o deu cung gia tri thi tra ve quan co tuong ung

4. Giai quyet voi ban co nxn
Tuong tu nhu 3x3, ta duyet het cac dong, duyet het cac cot, va duyet 2 duong cheo de kiem tra

Check rows
```typescript
for (let i = 0; i < size; i += 1) {
  first = board[i][0]
  for (let j = 0; j < size; j += 1) {
    if (board[i][j] == EMPTY) continue;
    if (board[i][j] != first) break;
    else if (j == size - 1) {
      return first;
    }
  }
}
```

Check cols
```typescript
for (let i = 0; i < size; i += 1) {
  first = board[0][i];
  
  for (let j = 0; j < size; j += 1) {
    check board[j][i];
  }
}
```

Check diagonals
```typescript
for (let i = 0; i < size; i += 1) {
  check board[i][i]
}
```

Check anti-diagonals
```typescript
for (let i = 0, j = size - 1; i < size; i += 1) {
  check board[i][size - 1 - i]
}
```

Cach nay lam duoc nhung ta nhan thay doan code check lap lai cho rows, cols, 2 duong cheo.
Ta can mo hinh hoa phep duyet rows, cols, 2 duong cheo 1 cach tong quat hon.

Dau tien, theo vi duyet rows, ta bieu dien duoi dang cac diem
Dong 0 => (0, 0), (0, 1), (0, 2), ... (0, size - 1)
Tuong duong voi P(0, 0) moi lan tang len 1 cho col
Dong 1 => (1, 0), (1, 1), ...
P(1, 0) voi moi lan tang 1 cho col

Voi cot,
Cot 0 => (0, 0), (1, 0) ... (size - 1, 0)
P(0, 0) moi lan tang row len 1

Voi duong cheo,
P(0, 0) => tang row + 1, col + 1

Duong cheo nguoc
P(0, size - 1) => he so (row + 1, col - 1)

Dua vao mo hinh tren ta nhan thay do co su tuong dong voi iterator pattern

# TDD: Setup test case
OK

# Bat dau code thuat toan thich hop nhat
OK

# Test va fix bug neu co
OK