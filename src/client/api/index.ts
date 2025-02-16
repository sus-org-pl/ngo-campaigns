export class NgoApiClient {
  private readonly externalId: string;

  constructor(externalId: string) {
    this.externalId = externalId;
  }

  private getRequestUrl(path: string): string {
    return `https://api.nowe.platnosci.ngo.pl/Public/campaign/${this.externalId}/${path}`;
  }

  public async get<T>(
    path: string,
    options: Exclude<RequestInit, "method"> = {}
  ): Promise<T> {
    const requestOptions: RequestInit = {
      redirect: "follow" as RequestRedirect,
      ...options,
      method: "GET",
    };

    const response = await fetch(this.getRequestUrl(path), requestOptions);

    return await response.json();
  }

  public async post<T>(
    path: string,
    options: Exclude<RequestInit, "method" | "headers" | "body"> = {}
  ): Promise<T> {
    const headers = new Headers();
    headers.append("content-type", "application/json");

    const requestOptions: RequestInit = {
      redirect: "follow" as RequestRedirect,
      ...options,
      method: "POST",
      headers,
    };

    const response = await fetch(this.getRequestUrl(path), requestOptions);

    return await response.json();
  }
}
