export class TodoModel {
  text: string;
  completed: boolean;

  constructor(text: any) {
    this.text = text;
    this.completed = false;
  }

  changeStatus() {
    this.completed = !this.completed;
  }

  getJson() {
    return {
      text: this.text,
      completed: this.completed,
    };
  }
  getText(): string {
    return this.text;
  }
  getCompleted() {
    return this.completed;
  }
}
