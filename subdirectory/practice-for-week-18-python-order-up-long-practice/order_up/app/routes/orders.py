from flask import Blueprint, redirect, url_for
from flask_login import login_required
from app import db
from app.models import Table, Order, OrderDetail, MenuItem

bp = Blueprint("orders", __name__, url_prefix="")

@bp.route("/")
@login_required
def index():
    # Inside the view function
    # form = TableAssignmentForm()

    # Get the tables and open orders
    tables = Table.query.order_by(Table.number).all()
    open_orders = Order.query.filter(Order.finished == False)

    # Get the table ids for the open orders
    busy_table_ids = [order.table_id for order in open_orders]

    # Filter the list of tables for only the open tables
    open_tables = [table for table in tables if table.id not in busy_table_ids]

    # Finally, convert those tables to tuples for the select field and set the
    # choices property to it
    form.tables.choices = [(t.id, f"Table {t.number}") for t in open_tables]

@bp.route("/assign-table/<int:table_id>/<int:employee_id>")
@login_required
def assign_table(table_id, employee_id):
    # Logic to create a new order with the provided table_id and employee_id
    # Redirect back to the index page
    return redirect(url_for("orders.index"))

@bp.route("/close-table/<int:id>")
@login_required
def close_table(id):
    order = Order.query.get(id)
    order.finished = True  # Update the attribute name to "finished"
    db.session.commit()
    return redirect(url_for("orders.index"))

@bp.route("/add-to-order/<int:id>", methods=["POST"])
@login_required
def add_to_order(id):
    # Logic to add menu item(s) to the order with order_id
    form = AddToOrder()
    form.menu_item.ids.choices = [(item.id, item.name)
                                  for item in MenuItem.query.all()]
    if form.validate_on_submit():
        order = Order.query.get(id)
        for menu_item_id in form.menu_item.ids.data:
            db.session.add(OrderDetail(order=order, menu_item_id=menu_item_id))
        db.session.commit()
    return redirect(url_for("orders.index"))
