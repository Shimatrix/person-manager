export interface IUserPrewiew {
    name: string;
    email: string;
}

export interface IUserFullInfo extends IUserPrewiew{
    birthDay: string;
    job: string;
    salary: number;
    experience: number;
}

export interface IModal {
    content: HTMLElement;
}

export interface ValidationRule {
    (value: string): boolean;
  }