/**
 * Creates new Task
 */
export class Task {

    constructor({title, description, priority, status, isShow}) {
      this._title = title || '';
      this._description = description || '';
      this._priority = priority || '';
      this._status = status || 'open';
      this._isShow = isShow || false;
      this._element = '';
    }
  
    getTitle() {
      return this._title;
    }
  
    getDescription() {
      return this._description;
    }
  
    getPriority() {
      return this._priority;
    }
  
    getStatus() {
      return this._status;
    }

    getElement() {
      return this._element;
    }
  
    setTitle(title) {
      this._title = title;
    }

    setDescription(desc) {
      this._description = desc;
    }
  
    setPriority(priority) {
      this._priority = priority;
    }
  
    setStatus(status) {
      this._status = status;
    }

    setElement(element) {
        this._element = element;
      }
  
  }