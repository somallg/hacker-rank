# Doc va phan tich yeu cau
Viet phuong thuc tinh max cua 2 so a, b ma khong su dung if-else hoac cac phep toan so sanh

# Quan sat va dua ra nhan xet, y tuong de giai quyet bai toan
Q: Do khong su dung phep so sanh, nen ta can cong thuc hay co che nao do de tinh ra max(a, b)
A: Nhat xet la max(a, b) = a neu a >= b hoac b neu nguoc lai.
Max(a, b) = a | b chi nhan 1 trong 2 gia tri.
Nghia la ton tai, k = 1 | 0 sao cho max(a, b) = k * a + (1 - k) * b;

Q: lam sao tim duoc k ?
A: nhan that k = 1 khi a >= b nghia la a - b >= 0 , goi c = a - b. Vay gia tri cua k phu thuoc vao c am hay duong
Neu c duong thi bit cuoi cua c (1 << 31) = 0
c am thi bit cuoi = 1

Tu do ta co cong thuc sau
c = a - b
d = c >> 31 (bit cuoi cua c)
k = 1 - d
max = k * a + (1 - k) * b

# Optimized Approach
Q: Cac giai tren co van de gi khong ?
A: Co, neu a = MAX_INT - 2 va b = -15. Khi do a - b = MAX_INT + 13 vuot qua gioi han bit
thi dau cua k la sai

Q: Khi nao thi cac tren sai ?
A: Khi a, b khac dau

Neu a, b khac dau
max = k * a + b * q

a >= 0, b < 0 => thi k = sign(b) = 1 => max = a * 1 + b * 0
a <= 0, b > 0 => thi k = sign(b) = 0 => max = a * 0 + b * 1

Con trong truong hop con lai (a, b) cung dau thi khi a - b < INT_MAX
thi k = 1 neu a > b => sign(a - b) = 0
k = 0 neu a < b => sign(a - b) = 1
k = flip(sign(a - b))^

k = sign(b) | sign(a - b) k lai chi co 1 trong 2 gia tri, tuong tu max ta bieu dien k duoi dang ct sau
k = sign(b) * kb + sign(a - b) * kab;

voi kab = flip(kb);
k = sign(b) neu a, b khac dau ~ sign(a) cung dau sign(b) ~ sign(a) ^ sign(b) = 0
k = sign(a - b) neu a, b cung dau ~ sign(a) ^ sign(b) = 1

kb = sign(a) ^ sign(b)
kab = flipt(kb)

k = kb * sign(b) + kab * sign(a - b);
q = flip(k)
max = k * a + q * b;

# Optimal Approach

# Dua ra loi gian toi uu sau khi so sanh cac loi giai

# TDD: Setup test case

# Bat dau code thuat toan thich hop nhat

# Test va fix bug neu co
