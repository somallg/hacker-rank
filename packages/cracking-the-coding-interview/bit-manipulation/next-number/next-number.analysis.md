# Doc va phan tich yeu cau
Input: 1 so tu tu nhien khong am n
Output: so tiep theo nho nhat va tiep theo lon nhat co cung so luong bit voi n

Example:
n = 10 => 0b1010
output: next smallest = 0b1001 = 9
next largest = 0b1100 => 12

# Dua ra nhan xet/y tuong de giai quyet bai toan
## Option 1
1. Chuyen so dang mang cac bits (tu trai qua phai) v/d [0, 1, 0, 1]
2. Duyet tung phan tu cua mang bits goi la b
3. Neu b == 0 next
4. Neu b == 1 va ben trai la 0 => swap vi tri b voi vi tri left => ta se duoc next largest number
4. neu b == 1 va ben phai la 0 => swap thi se duoc next smallest
5. neu duyet het ma khong co 0 neu ben phai so 1 thi tra ve n
6. neu duyet het ma khong co 0 neu ben trai 1 thi tra ve n << 1

# Dua ra loi gian toi uu sau khi so sanh cac loi giai
Q: lam sao de co next smallest ?
A: tim bit so 1 thap nhap ma ben phai no la bit 0 (ngoai cung ben phai) va shift sang phai 1 bit

Q: vi du 0b11011, tim bit 1 thap nhat ma ben phai la 1
A: so 1 nay ^

Q: gia su i, j la index bit cua so no, dieu gi say ra khi tao swap bit tai i tu 1 -> 0 va j tu 0 -> ?
A: Neu i > j, lam vay se khien n giam di. Neu i < j, lam vay se khien n tang len

Gia su, ta co so n = 13948
Ta co:
      0b |  1 |  1 |  0 |  1 | 1 | 0 | 0 | 1 | 1 | 1 | 1 | 1 | 0 | 0 | 
   index | 13 | 12 | 11 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
   
De tim bien lon hon n (khong can phai lon qua), ta can tim bit 0 thap nhat ma ben phai no la 1. Ta goi vi tri nay la p (trong truong hop nay p = 7)

Tiep theo ta se flip p tu 0 sang 1, ta co:
      0b |  1 |  1 |  0 |  1 | 1 | 0 | **1** | 1 | 1 | 1 | 1 | 1 | 0 | 0 | 
   index | 13 | 12 | 11 | 10 | 9 | 8 | **7** | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
   
so moi nay chac chan lon hon n, voi so bit 1 nhieu hon 1 va so bit 0 it hon 1.
Ta can flip bit 0 sang 1 vi tri ben phai p de sao cho gia trii nhan duoc la nho nhat nham thoa man yeu cau de bai.
Phan ben phai p la:

| 1 | 1 | 1 | 1 | 1 | 0 | 0 | 
| 6 | 5 | 4 | 3 | 2 | 1 | 0 |

muon no nho nhat ta can move het bit 0 sang ben trai va ben 1 sang ben phai
de thanh.
| 0 | 0 | 1 | 1 | 1 | 1 | 1 | 

Q: lam sao lam duoc nhu vay ?
A: ta can clear het bit ben phai p = n0 & voi so n (tat ca la 1 den p, tiep theo la c0 bit 0, c1 bit 1) voi c0 la so luong 0 ben phai p, c1 so luong 1 ben phai p
c1 = 5
c0 = 2

Q: lam sao de xoa bit n tu 0 den p
A: xoa het bits cua n tu 0 den p (tinh tu phai sang)
a = (1 << p)
b = a - 1
mask = ~b
n = n & b
cong thuc viet tat la `n &= ~((1 << p) - 1)`

Q: lam sao de co so nho nhat ?
A: add c1 - 1 bit 1 vao ben phai, va merge voi n
a = 1 << (c1 - 1) - 1
b = ~a 
n = n | b
ct la `n |= (1 << (c1 - 1)) - 1`

Q: tong hop lai cac buoc la gi ?
A: Cac buoc se nhu sau
1. Tim p index cua bit 0 dau tien ma ben phai la bit 1
2. Cung voi do la c0 so luong bit 0 ben phai p, c1 so luong bit 1 ben phai p
3. set bit 1 voi index p cua n
4. clear bits cua n tu p
5. move c1 - 1 bits sang ben phai p

## Next Smallest
Voi next smallest ta cung lam tuong tu nhu tren, cac buoc se nhu sau:
1. Tinh c1 so luong bit 1 o cuoi lien tiep
2. Tinh c0 so luong bit 0 ngay lien c1
3. tinh p = c0 + c1
4. clear bit to 0 den p (mat 1 bit 1)
5. move c1 + 1 bit 1 sang ben phai p (tra lai 1 bit 1)

# Optimize
## Cho next largest
Nhac lai steps nhu sau:
1. Tinh c0, c1, p nhu binh thuong
2. set bit tai p sang 1
3. clear bits ben phai p
4. dat c1 - 1 bits 1 vao ben phai p

Cho step 2 va 3 ta co the su dung phep tinh (+, -)
1. n + (1 << p) => set biet tai p sang 1
2. n + (2 ** c0 - 2) => set het c0 bit sang 0
3. n - (2 ** p - 1) => set het bit ben phai p ve 0
4. n + (2 ** (c1 - 1) - 1) => dat c1 - 1 bits 1 tu ben phai

# TDD: Setup test case

# Bat dau code thuat toan thich hop nhat

# Test va fix bug neu co