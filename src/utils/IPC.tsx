export class IPC {
  public static send = async <T,>(channel: string, data: T) => {
    return await (window as any).api.send(channel, data);
  };

  public static receive = async <T,>(
    channel: string,
    callback: (data: T) => void
  ) => {
    return await (window as any).api.receive(channel, callback);
  };
}
