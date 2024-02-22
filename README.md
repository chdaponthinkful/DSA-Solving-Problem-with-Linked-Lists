# 1.3.7 DSA-Solving-Problem-with-Linked-Lists

Tasks
Cycle in a list
Write an algorithm to find whether a linked list has a cycle (i.e., whether a node in the list has its next value pointing to an earlier node in the list). Return true if a cycle is found and false otherwise.

image.png

Text editor
You are working on creating a text editor. The editor allows the user to type text, delete text and move the cursor around using the arrow keys.

The characters of the text in the editor are stored in a linked list. A pointer to the nodes of the list tracks the position of the cursor. If the cursor is null, it means that the cursor is before the first character in the editor.

An Editor class has been started to store and manipulate the data in the editor. It contains two keys: text is a linked list storing the characters that are in the editor, and cursor is a pointer to the position of the cursor in the editor.

In this challenge, you will complete the Editor class by implementing the following methods. Each method should return a reference to the editor so that they become chainable.

insert(char)
Insert the given character at the cursor position. For example, given the following editor:

image.png

If you run insert("K"), the result will be the following:

image.png

Remember to consider what happens if the editor is empty or if the cursor is null.

delete()
Remove the character currently indicated by the cursor. The cursor should end up pointing to the previous character to the one that was deleted. Remember to consider what happens if the editor is empty or if the cursor is positioned at the head of the list.

arrowLeft()
Move the cursor one place to the left. That is, the cursor points to the previous character. Remember to consider what happens if the cursor is already at the head of the list.

arrowRight()
Move the cursor one place to the right. That is, the cursor points to the next character in the list. Remember to consider what happens when the cursor is already at the last character in the list.
