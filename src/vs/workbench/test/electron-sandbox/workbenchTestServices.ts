/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { Event } from 'vs/base/common/event';
import { workbenchInstantiationService as browserWorkbenchInstantiationService, ITestInstantiationService } from 'vs/workbench/test/browser/workbenchTestServices';
import { ISharedProcessService } from 'vs/platform/ipc/electron-sandbox/services';
import { INativeHostService, IOSProperties, IOSStatistics } from 'vs/platform/native/common/native';
import { VSBuffer } from 'vs/base/common/buffer';
import { DisposableStore } from 'vs/base/common/lifecycle';
import { URI } from 'vs/base/common/uri';
import { INativeOpenDialogOptions } from 'vs/platform/dialogs/common/dialogs';
import { IPartsSplash } from 'vs/platform/theme/common/themeService';
import { IOpenedWindow, IOpenEmptyWindowOptions, IWindowOpenable, IOpenWindowOptions, IColorScheme } from 'vs/platform/window/common/window';
import { TestConfigurationService } from 'vs/platform/configuration/test/common/testConfigurationService';
import { IContextKeyService } from 'vs/platform/contextkey/common/contextkey';
import { IEnvironmentService } from 'vs/platform/environment/common/environment';
import { IFileService } from 'vs/platform/files/common/files';
import { IInstantiationService } from 'vs/platform/instantiation/common/instantiation';
import { IEditorService } from 'vs/workbench/services/editor/common/editorService';
import { IPathService } from 'vs/workbench/services/path/common/pathService';
import { ITextEditorService } from 'vs/workbench/services/textfile/common/textEditorService';
import { ITextFileService } from 'vs/workbench/services/textfile/common/textfiles';

export class TestSharedProcessService implements ISharedProcessService {

	declare readonly _serviceBrand: undefined;

	getChannel(channelName: string): any { return undefined; }

	registerChannel(channelName: string, channel: any): void { }

	notifyRestored(): void { }
}

export class TestNativeHostService implements INativeHostService {
	declare readonly _serviceBrand: undefined;

	readonly windowId = -1;

	onDidOpenWindow: Event<number> = Event.None;
	onDidMaximizeWindow: Event<number> = Event.None;
	onDidUnmaximizeWindow: Event<number> = Event.None;
	onDidFocusWindow: Event<number> = Event.None;
	onDidBlurWindow: Event<number> = Event.None;
	onDidResumeOS: Event<unknown> = Event.None;
	onDidChangeColorScheme = Event.None;
	onDidChangePassword = Event.None;
	onDidTriggerSystemContextMenu: Event<{ windowId: number; x: number; y: number }> = Event.None;
	onDidChangeDisplay = Event.None;

	windowCount = Promise.resolve(1);
	getWindowCount(): Promise<number> { return this.windowCount; }

	async getWindows(): Promise<IOpenedWindow[]> { return []; }
	async getActiveWindowId(): Promise<number | undefined> { return undefined; }

	openWindow(options?: IOpenEmptyWindowOptions): Promise<void>;
	openWindow(toOpen: IWindowOpenable[], options?: IOpenWindowOptions): Promise<void>;
	openWindow(arg1?: IOpenEmptyWindowOptions | IWindowOpenable[], arg2?: IOpenWindowOptions): Promise<void> {
		throw new Error('Method not implemented.');
	}

	async toggleFullScreen(): Promise<void> { }
	async handleTitleDoubleClick(): Promise<void> { }
	async isMaximized(): Promise<boolean> { return true; }
	async maximizeWindow(): Promise<void> { }
	async unmaximizeWindow(): Promise<void> { }
	async minimizeWindow(): Promise<void> { }
	async updateWindowControls(options: { height?: number; backgroundColor?: string; foregroundColor?: string }): Promise<void> { }
	async setMinimumSize(width: number | undefined, height: number | undefined): Promise<void> { }
	async saveWindowSplash(value: IPartsSplash): Promise<void> { }
	async focusWindow(options?: { windowId?: number | undefined } | undefined): Promise<void> { }
	async showMessageBox(options: Electron.MessageBoxOptions): Promise<Electron.MessageBoxReturnValue> { throw new Error('Method not implemented.'); }
	async showSaveDialog(options: Electron.SaveDialogOptions): Promise<Electron.SaveDialogReturnValue> { throw new Error('Method not implemented.'); }
	async showOpenDialog(options: Electron.OpenDialogOptions): Promise<Electron.OpenDialogReturnValue> { throw new Error('Method not implemented.'); }
	async pickFileFolderAndOpen(options: INativeOpenDialogOptions): Promise<void> { }
	async pickFileAndOpen(options: INativeOpenDialogOptions): Promise<void> { }
	async pickFolderAndOpen(options: INativeOpenDialogOptions): Promise<void> { }
	async pickWorkspaceAndOpen(options: INativeOpenDialogOptions): Promise<void> { }
	async showItemInFolder(path: string): Promise<void> { }
	async setRepresentedFilename(path: string): Promise<void> { }
	async isAdmin(): Promise<boolean> { return false; }
	async writeElevated(source: URI, target: URI): Promise<void> { }
	async getOSProperties(): Promise<IOSProperties> { return Object.create(null); }
	async getOSStatistics(): Promise<IOSStatistics> { return Object.create(null); }
	async getOSVirtualMachineHint(): Promise<number> { return 0; }
	async getOSColorScheme(): Promise<IColorScheme> { return { dark: true, highContrast: false }; }
	async hasWSLFeatureInstalled(): Promise<boolean> { return false; }
	async killProcess(): Promise<void> { }
	async setDocumentEdited(edited: boolean): Promise<void> { }
	async openExternal(url: string): Promise<boolean> { return false; }
	async updateTouchBar(): Promise<void> { }
	async moveItemToTrash(): Promise<void> { }
	async newWindowTab(): Promise<void> { }
	async showPreviousWindowTab(): Promise<void> { }
	async showNextWindowTab(): Promise<void> { }
	async moveWindowTabToNewWindow(): Promise<void> { }
	async mergeAllWindowTabs(): Promise<void> { }
	async toggleWindowTabsBar(): Promise<void> { }
	async installShellCommand(): Promise<void> { }
	async uninstallShellCommand(): Promise<void> { }
	async notifyReady(): Promise<void> { }
	async relaunch(options?: { addArgs?: string[] | undefined; removeArgs?: string[] | undefined } | undefined): Promise<void> { }
	async reload(): Promise<void> { }
	async closeWindow(): Promise<void> { }
	async closeWindowById(): Promise<void> { }
	async quit(): Promise<void> { }
	async exit(code: number): Promise<void> { }
	async openDevTools(options?: Electron.OpenDevToolsOptions | undefined): Promise<void> { }
	async toggleDevTools(): Promise<void> { }
	async toggleSharedProcessWindow(): Promise<void> { }
	async resolveProxy(url: string): Promise<string | undefined> { return undefined; }
	async findFreePort(startPort: number, giveUpAfter: number, timeout: number, stride?: number): Promise<number> { return -1; }
	async readClipboardText(type?: 'selection' | 'clipboard' | undefined): Promise<string> { return ''; }
	async writeClipboardText(text: string, type?: 'selection' | 'clipboard' | undefined): Promise<void> { }
	async readClipboardFindText(): Promise<string> { return ''; }
	async writeClipboardFindText(text: string): Promise<void> { }
	async writeClipboardBuffer(format: string, buffer: VSBuffer, type?: 'selection' | 'clipboard' | undefined): Promise<void> { }
	async readClipboardBuffer(format: string): Promise<VSBuffer> { return VSBuffer.wrap(Uint8Array.from([])); }
	async hasClipboard(format: string, type?: 'selection' | 'clipboard' | undefined): Promise<boolean> { return false; }
	async sendInputEvent(event: any): Promise<void> { }
	async windowsGetStringRegKey(hive: 'HKEY_CURRENT_USER' | 'HKEY_LOCAL_MACHINE' | 'HKEY_CLASSES_ROOT' | 'HKEY_USERS' | 'HKEY_CURRENT_CONFIG', path: string, name: string): Promise<string | undefined> { return undefined; }
	async profileRenderer(): Promise<any> { throw new Error(); }
	async enableSandbox(enabled: boolean): Promise<void> { throw new Error('Method not implemented.'); }
}

export function workbenchInstantiationService(overrides?: {
	environmentService?: (instantiationService: IInstantiationService) => IEnvironmentService;
	fileService?: (instantiationService: IInstantiationService) => IFileService;
	configurationService?: (instantiationService: IInstantiationService) => TestConfigurationService;
	textFileService?: (instantiationService: IInstantiationService) => ITextFileService;
	pathService?: (instantiationService: IInstantiationService) => IPathService;
	editorService?: (instantiationService: IInstantiationService) => IEditorService;
	contextKeyService?: (instantiationService: IInstantiationService) => IContextKeyService;
	textEditorService?: (instantiationService: IInstantiationService) => ITextEditorService;
}, disposables = new DisposableStore()): ITestInstantiationService {
	const instantiationService = browserWorkbenchInstantiationService(overrides, disposables);

	instantiationService.stub(INativeHostService, new TestNativeHostService());

	return instantiationService;
}
