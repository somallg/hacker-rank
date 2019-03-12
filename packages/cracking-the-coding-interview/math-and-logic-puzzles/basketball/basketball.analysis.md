# Doc va phan tich yeu cau
Input: p xac xuat home-run. va 2 game
Game 1: duoc 1 lan danh
Game 2: duoc 3 lanh danh de thang can danh trung 2 lan

Output: Chon game nao de xac xuat thang cao hon?

# Dua ra nhan xet/y tuong de giai quyet bai toan

Q: Xac xuat thang cua Game 1?
A: p

Q: Xac xuat thang cua Game 2?
A: Goi s(k, n) la xac xuat dang trung dung k lan trong n.
```
Xac xuat game 2 = s(2, 3) + s(3, 3)
= s([1 2], 3) + s([1 3], 3) + s([2 3], 3) + s(3, 3)
= p * p * (1 - p) + p * (1 - p) * p + (1 - p) * p * p + p * p * p
= 3 * p^2 (1 - p) + p^3
= p^3 + 3 * p^2 - 3 p^3
= 3 * p^2 - 2 * p^3
```

Q: Khi nao nen chon game 1?
A: Khi xac xuat thang game 1 > xac xuat thang game 2
```
p > 3 * p^2 - 2 * p^3
p - 3 * p^2 + 2 * p^3 > 0
p * (2 * p^2 - 3 * p + 1) > 0
p * (2p - 1) * (p - 1) > 0
```

Q: Khi nao thi bat dang thuc tren thoa man ?
A: Khi p khac 0 va 2p - 1 < 0 vi p - 1 < 0 roi. Nghia la 
```
0 < p < 1/2
```

Q: Khi nao thi chon game 2?
A: Khi 1> p > 1/2

Q: Truong hop dac biet ?
A: p = 0 | 1/2 | 1 thi chon 2 trong 2 game vi xac xuat la nhu nhau