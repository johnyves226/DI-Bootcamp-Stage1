class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age
chat = []
chat.append(Cat("youuga",3))
chat.append(Cat("krikri",5))
chat.append(Cat("yosa",10))

def catAge (chats):
    chat = chats[0]
    for x in chats :
        if x.age > chat.age :
            chat = x
    return chat
chatA = catAge(chat)
print(f"The oldest cat is {chatA.name}, and is {chatA.age} years old.")