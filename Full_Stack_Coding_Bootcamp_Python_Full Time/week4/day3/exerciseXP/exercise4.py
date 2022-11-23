users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
#1
num =[z for z,y in enumerate(users)]
disney_users_A = dict(zip(users,num))
print(disney_users_A)
#2
disney_users_B = dict(zip(num,users))
print(disney_users_B)
#3
disney_users_C = dict(zip(sorted(users),num))
print(disney_users_C)
#4
#1
users1 = []
for x in users :
    if "i" in x :
        users1.append(x)
disney_users_A = dict(zip(users1,num))
print(disney_users_A)
#2
users2 = []
for x in users :
    if "m" == x[0].lower() or "p" == x[0].lower() :
        users2.append(x)
disney_users_A = dict(zip(users2,num))
print(disney_users_A)