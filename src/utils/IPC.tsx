export class IPC {
  public static send = async <T,>(channel: string, data: T) => {
    return await (window as any).api.send(channel, data);
  };
}
