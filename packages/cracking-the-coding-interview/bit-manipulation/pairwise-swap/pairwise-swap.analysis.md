# Doc va phan tich yeu cau
Input: co so tu nhien n
Output: so tu nhien m duoc thuc hien bang cac, hoan doi bit le cua n voi bit chan cua n. Yeu cau sao cho so luong phep toan la it nhat

# Dua ra nhan xet/y tuong de giai quyet bai toan
Q: Y tuong ?
A: co 3 steps
1. lay tat ca cac bit le cua n (1, 3, 5, 7) vao dich phai, ket qua goi la odd
2. lay tat ca cac bit chan cua n (0, 2, 4, 6) va dich trai, kq la even
3. merge odd va even se ra duoc kq


Q: lam sao lay tat ca cac bit le cua n 1 cach nhanh nhat ?
A: n & 0b1010101010101010101010101010101010 (gia su n la 32 bit)

Q: la sao lay so bit chan nhanh nhat ?
A: n & 0b0101010101010100101010101001 (gia su n la 32 bit)

# Dua ra loi gian toi uu sau khi so sanh cac loi giai

# TDD: Setup test case

# Bat dau code thuat toan thich hop nhat

# Test va fix bug neu co