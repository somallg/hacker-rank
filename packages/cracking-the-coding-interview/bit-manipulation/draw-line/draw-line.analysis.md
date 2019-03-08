# Doc va phan tich yeu cau
Input: screen: byte[], width: number, x1: number, x2: number, y: number
screen la bieu dien cua man hinh khong mau trong bo nho may tinh, trong do 8 pixel se duoc dat chung vao 1 byte. 1 pixel se la 1 bit

Output: tra ve screen ma set byte[x1][y] den byte[x2][y] = 1 het

# Dua ra nhan xet/y tuong de giai quyet bai toan
Q: Convert to mang 1 chieu sang mang 2 chieu ?
A: row 0 bat dau tu 0 => w - 1
row 1 bat dau tu w => 2w - 1
row 2 bat dau tu 2w => 3w - 1

Q: byte[x1][y] tuong ung voi tao do nao ?
A: byte[x1][y] ~ byte[x1 / y + x1 % y]


## Cach 1 - Brute force
lap tu i tu x1 den x2 va set byte[i][y] = 1 easy

## Cach 2 - Bit
Ta nhan thay neu pixel x1 va pixel x2 cach xa nhau (i.e khong cung 1 byte) thi tat ca cac byte o giua byte chua x1, va x2 se co gia tri la 0b11111111 (0xFF)
Bai toan tro thanh
1. tim startOffset cua x1 trong byte chua no
2. tim startFullByte (i.e byte day du dau tien chua x1, neu x1 o bit dau tien cua byte a thi la a neu khong la byte a + 1)
3. tim endOffset cua x2 trong byte chua no
4. tim lastFullByte cua byte chua x2
5. set cac byte tu startFullByte den lastFullByte bang 0xFF
6. Bat dau xet cho startOffset (x1) va endOffset(x2)
7. cb mask1 = (0xFF >> (startOffset))
8. cb mask2 = ~(0xFF >> (endOffset + 1)
9. neu x1 va x2 cung 1 byte (i.e x1/8 == x2/8) => mask = mask1 & mask2; screen[pos] |= mask
10. neu khong, set bit x1
11. neu x1 la bat dau cua byte ta da set roi
12. neu khong byteIndex = (w / 8) * y + startFullByte - 1 va screen[byteIndex] |= startMask
13. tuong tu neu x2 khong phai ket thu thi
14. set byteIndex = (w / 8) * y + endFullByte - 1 va screen[byteIndex] |= endMask
15. end

# Dua ra loi gian toi uu sau khi so sanh cac loi giai

# TDD: Setup test case

# Bat dau code thuat toan thich hop nhat

# Test va fix bug neu co