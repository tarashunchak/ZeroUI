type COMMANDS_TABLE_KEY = string;

class _CommandsTable {
  private static tables: Map<COMMANDS_TABLE_KEY, number> = new Map();

  static sendCommand(...params: any){
  };

  static setOnCommand(){
  };
};

export const CommandsTable: _CommandsTable = new _CommandsTable();