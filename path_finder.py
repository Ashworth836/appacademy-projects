from tree import Node 
from queue import Queue
from collections import deque

class KnightPathFinder:
    def __init__(self, start_position):
        self._start_position = start_position
        self._considered_positions = {start_position}
        self._root = Node(start_position)

    def get_valid_moves(self, position):
        valid_moves = []
        moves = [(-2, -1), (-2, 1), (-1, -2), (-1, 2), (1, -2), (1, 2), (2, -1), (2, 1)]
        x, y = position

        for dx, dy in moves:
            new_position = (x + dx, y + dy)
            if 0 <= new_position[0] < 8 and 0 <= new_position[1] < 8:
                valid_moves.append(new_position)

        return valid_moves

    def new_move_positions(self, position):
        valid_moves = self.get_valid_moves(position)
        new_moves = [move for move in valid_moves if move not in self._considered_positions]
        self._considered_positions.update(new_moves)
        return new_moves

    # def build_move_tree(self):
    #     queue = Queue()
    #     queue.put(self._root)
    #     while not queue.empty():
    #         node = queue.get()
    #         for child_pos in self.new_move_positions(node.value):
    #             child_node = Node(child_pos)
    #             node.add_child(child_node)
    #             queue.put(child_node)
    
    def build_move_tree(self):
        queue = deque()
        queue.append(self._root)

        while len(queue) > 0:
            current_node = queue.popleft()
            current_position = current_node.value

            for position in self.new_move_positions(current_position):
                child_node = Node(position)
                current_node.add_child(child_node)
                queue.append(child_node)

    def find_path(self, end_position):
        end_node = self._root.breadth_search(end_position)
        return self.trace_to_root(end_node)

    def trace_to_root(self, end_node):
        path = [end_node.value]

        while end_node.parent is not None:
            end_node = end_node.parent
            path.append(end_node.value)

        return path[::-1]


