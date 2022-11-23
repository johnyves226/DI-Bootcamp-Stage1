
brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": ["Amancio", "Ortega", "Gaona"],
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"]
    }
}
print(brand)
#3
brand["number_stores"] = 2
#4
print("Les clients de Zara sont tous ceux voulant faire "
      "des achats de \nvêtements pour : ", brand["type_of_clothes"])
#5
brand["country_creation"] = "Spain"
#6
if brand["international_competitors"] :
    brand["international_competitors"].append("Desigual")
#7
del brand["creation_date"]
#8
print(brand["international_competitors"][-1])
#9
print(brand["major_color"]["US"])
#10
print(len(brand.keys()))
#11
print(brand.keys())
#12
more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}
#13
brand.update(more_on_zara)
#14
print(brand["number_stores"])
# pas de nouvelle variable déclarée, la valeur a juste été mis à jour
