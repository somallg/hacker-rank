# Doc va phan tich yeu cau
Cho 2 so tu nhien a, b. Hoan doi gia tri cua a va b ma khong su dung bien tam

# Quan sat va dua ra nhan xet, y tuong de giai quyet bai toan
Gia su ta co:
```typescript
var a = va // (value cua a)
var b = vb // (value cua b)
```

De hoan doi gia tri a, b, ta se duoc

``` typescript
a = vb;
b = va;
```

Neu ta gan luon a = vb, thi b khong thay doi

``` typescript
a = vb;
b = vb;
```

Khi do ta da lam mat gia tri cua a

Ta can co che de gop (compose) va , vb lai sau do tach ra de ra duoc va rieng vb rieng
Nhan thay role (a, b) doi xung nhau nen chi can ap dung cho 1 bien, bien kia cung tuong tu

Gia su ta compose bang cach su dung phep cong (+)

Compose va, vb
``` typescript
a = a + b = va + vb;
b = vb;
```

Tinh va
``` typescript
a = (va + vb);
b = a - vb = (va + vb) - vb = va;
```

Tinh vb
``` typescript
a = a - b = (va + vb) - va = vb;
b = va;
```

Tuong tu ta co the lam voi phep tru (-), hoac xor (^)

Trong truong hop phep tru (-):

``` typescript
a = va - b = va - vb;
b = vb;
```

``` typescript
a = va - vb;
b = a + b = (va - vb) + vb = va;
```

``` typescript
a = b - a = va - (va - vb) = vb;
b = va;
```

Trong truong hop phep xor (^):

``` typescript
a = a ^ b = va ^ vb;
b = vb;
```

``` typescript
a = va ^ vb;
b = a ^ b = va ^ vb ^ vb = va;
```

``` typescript
a = b ^ a = va ^ va ^ vb = vb;
b = va;
```

# Naive Approach

# Optimized Approach

# Optimal Approach

# Dua ra loi gian toi uu sau khi so sanh cac loi giai

# TDD: Setup test case
Done

# Bat dau code thuat toan thich hop nhat

# Test va fix bug neu co

