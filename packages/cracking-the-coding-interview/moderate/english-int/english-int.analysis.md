# Doc va phan tich yeu cau
Cho 1 so tu nhien n, tra ve chuoi ky tu mo to n theo tieng anh
V/d:
n = 10   => "ten"
n = 1234 => "one thousand two hundred thirty four"

Muon convert 1 so tu nhien n = 12_345_678
Ta bieu dien convert(n) = convert(12) + "milion" + convert(345) + "thousand" + convert(678)

convert(345) = convert(3) + "hundred" + convert(45)
convert(45)  = convert(40) + convert(5)
             = "fourty" + "five"

# Naive Approach
chia n thanh 3 khoi 1
n = 12_345_678 => [12, 345, 678]
voi tung phan tu ta de quy va cong the gia tri tuong ung
12 + "millions"
345 + "thousand"

convert cac chunk lay duoc o buoc truoc (moi chunk se chi tu 0 -> 999)
Ta tiep tuc chia nho cac chunk de xu ly
c > 100 => c/100 + 'hundred' 
c = c%100

c = 0 -> 99
neu c >= 20 => kq += tens(c/10) (2 => tweenty, 3 => thirty)
neu c >= 10 -> 19 => lay string tuong tung trong small

c = c % 10 => cong them smalls[c] neu c >= 0 <= 9; khong lay 0

# Optimized Approach

# Optimal Approach

# Dua ra loi gian toi uu sau khi so sanh cac loi giai

# TDD: Setup test case

# Bat dau code thuat toan thich hop nhat

# Test va fix bug neu co
