class Dog :
    def __init__(self, name, height) :
        self.name = name
        self.height = height

    def bark(self) :
        print(f"{self.name} goes woof!")

    def jump(self):
        print(f"{self.name} jump {self.height*2} cm high!")
#5...6
davids_dog = Dog("Rex",50)
print(f"Chien de David: {davids_dog.name} and have {davids_dog.height} cm")
davids_dog.bark()
davids_dog.jump()
print("\n")
#7...8
sarahs_dog = Dog("Teacup", 20)
print(f"Chien de Sarah: {sarahs_dog.name} and have {sarahs_dog.height} cm")
sarahs_dog.bark()
sarahs_dog.jump()
#9
print("\n")
if sarahs_dog.height > davids_dog.height:
    print(f"Chien de Sarah: {sarahs_dog.name}")
else:
    print(f"Chien de David: {davids_dog.name}")