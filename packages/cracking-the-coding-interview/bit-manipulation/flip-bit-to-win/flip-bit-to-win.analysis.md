# Doc va phan tich yeu cau
Input: so duoi dang nhi phan, va 1 phep thuc thi chuyen bit 0 thanh 1
Output: chuyen duy nhat 1 bit 0 thanh 1 de duoc chuoi bit 1 lien nhau dai nhat
Example:
1775 (or: 11011101111)
Output: 8

# Dua ra nhan xet/y tuong de giai quyet bai toan
## Option #1: ket hop chuoi 2 chuoi 1 bit lien tiep cach nhau boi 1 bit 0 duy nhat.
Ta nhan thay rang chi co the ket hop chuoi 1 bits a va b khi o giua a va b la 1 bit 0 duy nhat. Khi do do dai sau khi ket hop = a.length + b.length + 1

### Steps:
1. Chuyen sao sang dang binary 11011101111
2. Chuyen dang binary sang mang phan anh do dai 0bit, 1bit lien tiep, 0/1 hoan doi voi nhau do 1 bit bat ky chi co 2 kha nang neu no la 1 thi no thuoc 1s neu 0 thi hoc phan 0 (tu phai qua trai bat dau tu 0) [0(0), 4(1), 1(0), 3(1), 1(0), 2(1), 21(0)] // 21 la so bit con lai cua 32bit binary
3. Lap mang tu 0 step = 2 => moi lan ta thay 1(0) ta thu chap phan ben trai va ben phai 0 neu ca 2 la bit 1, neu khong ta lay phan co length lon nhat trai hoac phai + 1, neu bang 0 thi chon ben trai hoac phai
4. tra ve gia tri lon nhat cua mang

### Phan tich:
1. Do phuc tap ve thoi gian 0(l) voi l la so bit cua n
2. Do phuc tap ve khong gian 0(l) vi ta can mang de chua cac day 0, 1

# Dua ra loi gian toi uu sau khi so sanh cac loi giai
Q: Ta co the toi uu ve thoi gian duoc khong?
A: Khong, dua vao BCR: voi moi bit ta can duyet no it nhat 1 lan do do do phuc tap ve thoi gian O(l) la BCR. Do do, con lai ta co the toi uu hoa ve khong gian

## Steps: Thay vi luu tat ca day 1, 0 vao mang, ta chi can 2 bien previousLeft, currentLeft de luu lai do dai day 1
1. Duyet voi n > 0
2. Kiem tra bit ben phai cua n (n & 1) => b
3. Neu b == 1 => tang currentLength len 1
4. Neu b == 0 => previousLength = currentLength neu nhu bit tiep theo b bang 1. De kiem tra ta can b & 2, neu khong currentLength = 1
reset currentLength = 0
5. maxSeq = max(previous + current + 1, maxSeq)

# TDD: Setup test case

# Bat dau code thuat toan thich hop nhat

# Test va fix bug neu co
