import { Response } from "express";

export default class BaseController {
  protected static redirect = (res: Response, redirectUrl: string) => {
    res.redirect(redirectUrl);
  };

  protected static alert = (res: Response, alertMsg: string) => {
    const script = `
    <script>
      window.alert('${alertMsg}');
    </script>`;
    res.send(script);
  };

  protected static close = (res: Response) => {
    const script = `
    <script>
      window.close();
    </script>`;
    res.send(script);
  };

  protected static alertAndClose = (res: Response, alertMsg: string) => {
    const script = `
    <script>
      window.alert('${alertMsg}');
      window.close();
    </script>`;
    res.send(script);
  };

  protected static sendBufferFile = (
    res: Response,
    data: any,
    name: string
  ) => {
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${encodeURI(name)}"`
    );
    res.send(data);
  };

  protected static send = (res: Response, status: number, data: any) => {
    res.status(status).send(data);
  };

  protected static json = (res: Response, status: number, data: any) => {
    res.status(status).json({
      success: true,
      data,
      response: new Date(),
    });
  };

  protected static error = (res: Response, status: number, error: any) => {
    res.status(status ?? 500).json({
      success: false,
      error,
      response: new Date(),
    });
  };
}
