import FileRecord from '../lib/file-record';
import { RawFileRecord } from '../lib/file-record';
import Vue from 'vue';
import { ConfigureFn } from '../lib/ajax-request';
declare const _default: import("vue/types/vue").ExtendedVue<Vue, {
    fileRecords: FileRecord[];
    rawFileRecords: RawFileRecord[];
    isDragging: boolean;
    isSorting: boolean;
    isSortingActive: boolean;
    transitionDuration: number;
    overallProgress: number;
    uniqueId: string;
    sortTimeout: number;
}, {
    createThumbnail(fileRecord: FileRecord, video: HTMLVideoElement): Promise<void>;
    initVideo(fileRecord: FileRecord): void;
    getFileRecordOrRawInstance(fileRecordOrRaw: FileRecord | RawFileRecord, raw: boolean): FileRecord | RawFileRecord;
    getFileRecordRawInstance(fileRecordOrRaw: FileRecord | RawFileRecord): RawFileRecord;
    getFileRecordInstance(fileRecordOrRaw: FileRecord | RawFileRecord): FileRecord;
    prepareConfigureFn(configureXhr?: ConfigureFn | undefined): ConfigureFn | undefined;
    upload(url: string, headers: object, fileRecordsOrRaw: FileRecord[] | RawFileRecord[], createFormData?: ((fileRecord: FileRecord) => FormData) | undefined, configureXhr?: ConfigureFn | undefined): Promise<any>;
    deleteUpload(url: string, headers: object, fileRecordOrRaw: FileRecord | RawFileRecord, uploadData?: any, configureXhr?: ConfigureFn | undefined): Promise<any>;
    updateUpload(url: string, headers: object, fileRecord: FileRecord | RawFileRecord, uploadData?: any, configureXhr?: ConfigureFn | undefined): Promise<any>;
    autoUpload(fileRecords: FileRecord[] | RawFileRecord[]): Promise<any>;
    autoDeleteUpload(fileRecord: FileRecord | RawFileRecord): Promise<any>;
    autoUpdateUpload(fileRecord: FileRecord): Promise<any>;
    equalFiles(file1: File, file2: File): boolean;
    isFileAddedAlready(file: File): boolean;
    handleFiles(files: File[] | FileList): void;
    filesChanged(event: InputEvent): void;
    drop(event: DragEvent): void;
    dragEnter(event: DragEvent): void;
    dragOver(event: DragEvent): void;
    dragLeave(event: DragEvent): void;
    viewFileRecord(fileRecordOrRaw: FileRecord | RawFileRecord): void;
    removeFileRecord(fileRecordOrRaw: FileRecord | RawFileRecord): void;
    deleteFileRecord(fileRecordOrRaw: FileRecord | RawFileRecord): void;
    readBLOB(fileRecord: FileRecord): void;
    filenameChanged(fileRecord: FileRecord): void;
    checkValue(): void;
    sortStart(): void;
    sortEnd(sortData: {
        event: Event;
        newIndex: number;
        oldIndex: number;
        collection: any;
    }): void;
}, {
    withCredentials: boolean | undefined;
    canAddMore: boolean;
    helpTextComputed: string;
    isDownloadable: boolean;
    isDeletable: boolean;
    isSortable: boolean;
    hasMultiple: boolean;
    shouldRead: boolean;
}, Record<"value" | "deletable" | "downloadable" | "editable" | "linkable" | "errorText" | "disabled" | "thumbnailSize" | "averageColor" | "progress" | "accept" | "auto" | "capture" | "compact" | "helpText" | "maxFiles" | "maxSize" | "meta" | "multiple" | "read" | "readonly" | "resumable" | "sortable" | "theme" | "uploadConfig" | "uploadHeaders" | "uploadUrl" | "uploadWithCredentials", any>>;
export default _default;
