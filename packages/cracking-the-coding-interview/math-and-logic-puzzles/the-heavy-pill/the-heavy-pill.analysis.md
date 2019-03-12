# Doc va phan tich yeu cau
* Input: 20 binh chua thuoc. Moi vien thuoc nang 1.0 gram. Duy nhat co 1 binh chua thuoc nang 1.1 gram. Va 1 chiec can co the do duoc chinh xac do nang. Chi duoc can 1 lan duy nhat.
* Output: Binh chua thuoc nang 1.1 gram

# Dua ra nhan xet/y tuong de giai quyet bai toan
Q: co rang buoc gi neu nhu ta chi duoc can 1 lan?
A: Neu chi can 1 lan, ta bat buoc phai can tat ca cac binh. Vi neu ta chi can 18 binh thi khong the xac dinh duoc binh nao chua thuoc nang 1.1 gram

Q: Lam cach nao de chi can 1 lan, can can tat ca cac binh de ra duoc binh can tim ?
A: Ta can cach nao de de co the phan biet, nhan biet duoc binh dua vao so can nang thuc te

Q: Gia su bai toan rut la thanh 2 binh, ta can 1 vien thuoc o moi binh thi ta co lam duoc khong ?
A: Neu lam nhu vay ta se ra can nang thuc te la 2.1 gram va khong the xac dinh duoc.

Q: Neu nhu ta lay 1 vien Binh 1 va 2 vien Binh 2 thi sao ?
A: Khi do, dua vao so luong can nang thuc te ta co the suy luan ra binh nao chua thuoc nang hon.

Q: Cu the ?
A: Neu nhu can nang thuc te la 1 + 2 * (1.1) = 3.2 thi Binh 2 la Binh can tim
Neu nhu can nang thuc te la 1.1 + 2 * 1 = 3.1 thi Binh 1 la binh can tim

Q: Tuong tu nhu the cho 20 binh co duoc khong?
A: Ta se can tap hop la: 1 (B1), 2(B2), 3(B3), .... 20(B20). 
Ta co hieu khoi luong thuc te - (20 Binh deu 1 gram) = i * 0.1 (gram)

```
w - (1 + 2 + ... 20) = i * 0.1
w - 210 = i * 0.1
i = (w - 210) / 0.1
```
