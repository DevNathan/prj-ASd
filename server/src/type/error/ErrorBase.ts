/**
 * 해당 레퍼런스 참조 및 도입
 * https://medium.com/@yujso66/%EB%B2%88%EC%97%AD-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%97%90%EC%84%9C-%EC%A0%84%EB%AC%B8%EA%B0%80%EC%B2%98%EB%9F%BC-%EC%97%90%EB%9F%AC-%EC%B2%98%EB%A6%AC%ED%95%98%EA%B8%B0-39d14f5cc6a2
 * */
export class ErrorBase<T extends string> extends Error {
  name: T;
  message: string;
  cause: any;

  constructor({
    name,
    message,
    cause,
  }: {
    name: T;
    message: string;
    cause?: any;
  }) {
    super(message);
    this.name = name;
    this.message = message;
    this.cause = cause;
  }
}
