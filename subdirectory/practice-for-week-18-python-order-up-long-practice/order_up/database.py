from dotenv import load_dotenv
from app.models import Menu, MenuItem, MenuItemType, Table
load_dotenv()

# Regardless of the lint error you receive,
# load_dotenv must run before running this
# so that the environment variables are
# properly loaded.
from app import app, db
from app.models import Employee


with app.app_context():
    db.drop_all()
    db.create_all()

    employee = Employee(name="Margot", employee_number=1234, password="password")
    db.session.add(employee)
    db.session.commit()

    beverages = MenuItemType(name="Beverages")
    entrees = MenuItemType(name="Entrees")
    sides = MenuItemType(name="Sides")

    dinner = Menu(name="Dinner")

    fries = MenuItem(name="French fries", price=3.50, type=beverages, menu=dinner)
    drp = MenuItem(name="Dr. Pepper", price=1.0, type=beverages, menu=dinner)
    jambalaya = MenuItem(name="Jambalaya", price=21.98, type=entrees, menu=dinner)

    db.session.add(beverages)
    db.session.add(entrees)
    db.session.add(sides)
    db.session.add(dinner)
    db.session.add(fries)
    db.session.add(drp)
    db.session.add(jambalaya)
    db.session.commit()

    # Create and add 10 tables
    tables = [
        Table(number=1, capacity=4),
        Table(number=2, capacity=4),
        Table(number=3, capacity=6),
        Table(number=4, capacity=2),
        Table(number=5, capacity=8),
        Table(number=6, capacity=4),
        Table(number=7, capacity=6),
        Table(number=8, capacity=2),
        Table(number=9, capacity=4),
        Table(number=10, capacity=8),
    ]

    db.session.add_all(tables)
    db.session.commit()

    print("Database seeded successfully.")
