interface path_find {
    path: string;
    type: "key" | "value";
    value: string;
};

export default class {

    object:any;
    fetch_word:string;
    is_includes:boolean;
    case_sensitive:boolean;
    finds:Array<path_find>;

    constructor (object:any, fetch_word:string, is_includes:boolean, case_sensitive:boolean) {
        this.object = object;
        this.case_sensitive = case_sensitive;
        this.fetch_word = case_sensitive ? fetch_word : fetch_word.toLowerCase();
        this.is_includes = is_includes;
        this.finds = [];
    };

    fetch_row (object:any, current_path:string, isArray:boolean):void {
        var object_array = Object.keys(object);
        for (let key of object_array) {
            this.result_checker(key, "key", current_path);
    
            var key_path = `${current_path}[${isArray ? key : '"'+key+'"'}]`;
            var key_value = object[key];
    
            if (object[key] && typeof object[key] === 'object') this.fetch_row(object[key], key_path, Array.isArray(object[key]));
            else this.result_checker(key_value, "value", key_path);
        };
    };

    result_checker (value:string, type: "key" | "value", path:string):void {
        var original_value = value;
        if (value === null) value = "null";
        else if (!this.case_sensitive) value = value.toString().toLowerCase();
        else value = value.toString();
        
        if (this.fetch_word === value || (this.is_includes && value.includes(this.fetch_word))) this.finds.push({path, type, value: original_value});
    };

    get result ():Array<path_find> {
        this.fetch_row(this.object, "x", Array.isArray(this.object));
        return this.finds;
    };
};

