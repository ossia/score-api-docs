/*
@licstart  The following is the entire license notice for the
JavaScript code in this file.

Copyright (C) 1997-2019 by Dimitri van Heesch

This program is free software; you can redistribute it and/or modify
it under the terms of version 2 of the GNU General Public License as published by
the Free Software Foundation

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License along
with this program; if not, write to the Free Software Foundation, Inc.,
51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

@licend  The above is the entire license notice
for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "score", "index.html", [
    [ "Coding Style", "_coding_style.html", [
      [ "General philosophy", "_coding_style.html#Philosophy", null ],
      [ "Qt versus Modern C++", "_coding_style.html#Qt", null ],
      [ "Inheritance", "_coding_style.html#Inheritance", null ],
      [ "Passing values", "_coding_style.html#Values", null ],
      [ "Templates", "_coding_style.html#Templates", null ]
    ] ],
    [ "Commands", "_commands.html", [
      [ "Creating a command", "_commands.html#CreatingCommand", null ],
      [ "Launching commands", "_commands.html#LaunchingCommands", null ],
      [ "Special commands", "_commands.html#SpecialCommands", [
        [ "Command dispatchers", "_commands.html#Dispatchers", null ]
      ] ]
    ] ],
    [ "Contexts", "_contexts.html", null ],
    [ "Graphics plug-ins", "_gfx_plugins.html", [
      [ "Creating a custom node", "_gfx_plugins.html#CustomNode", null ],
      [ "Shader conventions", "_gfx_plugins.html#ShaderConventions", null ],
      [ "Video decoders", "_gfx_plugins.html#VideoDecoders", null ]
    ] ],
    [ "Data models", "_models.html", [
      [ "Organization", "_models.html#Organization", null ],
      [ "Identification of objects", "_models.html#IdentificationObjects", [
        [ "Identifiers", "_models.html#Identifiers", null ],
        [ "Paths", "_models.html#Paths", null ]
      ] ],
      [ "Creating models", "_models.html#CreatingModels", null ],
      [ "Relationship to Qt's item models", "_models.html#ItemModel", null ],
      [ "Tree models for simple objects", "_models.html#SimpleObjectsModel", null ]
    ] ],
    [ "Model-View-Presenter separation", "_model_view_presenter.html", null ],
    [ "Plug-ins, factories and interfaces", "_plugins_factories_and_interfaces.html", [
      [ "Anatomy of a plug-in", "_plugins_factories_and_interfaces.html#Anatomy", null ],
      [ "Adding a new component", "_plugins_factories_and_interfaces.html#NewClass", null ],
      [ "Declaring a new interface", "_plugins_factories_and_interfaces.html#NewInterface", null ],
      [ "Add-on manager", "_plugins_factories_and_interfaces.html#AddonManager", null ]
    ] ],
    [ "Useful score interfaces", "_score_interfaces.html", null ],
    [ "Serialization", "_serialization.html", [
      [ "Generalities on serialization", "_serialization.html#GenSer", null ],
      [ "DataStream serialization", "_serialization.html#DataStreamSer", null ],
      [ "JSON serialization", "_serialization.html#JSONObjSer", [
        [ "For deserializing", "_serialization.html#ObjDeser", [
          [ "In DataStream", "_serialization.html#DSObjDeser", null ],
          [ "In JSON", "_serialization.html#JSObjDeser", null ]
        ] ],
        [ "Serialization of polymorphic types", "_serialization.html#PolySer", null ],
        [ "Serialization examples", "_serialization.html#SerExamples", null ]
      ] ]
    ] ],
    [ "State Machines", "_state_machines.html", null ],
    [ "Todo List", "todo.html", null ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ],
        [ "Enumerator", "namespacemembers_eval.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
".html",
"_c_s_p_coherency_checker_list_8hpp_source.html",
"_event_inspector_widget_8hpp_source.html",
"_mapping_inspector_factory_8hpp_source.html",
"_q_graphics_log_slider_8hpp_source.html",
"_sync_8hpp_source.html",
"class_audio_inlet.html#afc1b0c849e5d913c986ad7139a75b895",
"class_curve_1_1_create_point_command_object.html#aa26caec9a1d212c3886e975b4a149ec8",
"class_curve_1_1_segment_model.html#a3e1aa0d7ac2899e85b55a2ca124849f2",
"class_data_stream_reader.html#a939ebaf71f0663f6b3056cb5d5bd7db0",
"class_dataflow_1_1_audio_device.html#a399c6a431c0c6a1422b53770adbb2289",
"class_device_1_1_device_model_provider_list.html#adda113fe0f9edabee1b9943525afb119",
"class_execution_1_1_manual_clock_1_1_time_widget.html#a20275d29f101d49e15411f7b2ae57020",
"class_explorer_1_1_address_settings_widget.html#ac94639db4a4d8ae8d975705ce9238010",
"class_explorer_1_1_settings_1_1_presenter.html#a7c1305c31d95398c78e8b4ec1d618c10",
"class_gfx_1_1_invert_y_renderer.html#a98b0cca804f97e32e8f27bf0a7e4a638",
"class_gfx_1_1gfx__exec__node.html#a73eb34805bd54b89250abcdbd70faeb2",
"class_identified_object.html#a8ca17b34902815364822038df736b7e2",
"class_j_s_o_n_reader.html#a0b3c8150045ba0ffffba28731d3cc834",
"class_j_s_o_n_writer.html#a8b23a493d349302337bcb01bf1e8b814",
"class_local_tree_1_1_interval_base.html",
"class_media_1_1_step_1_1_model.html#a0be1c9e065f4449407aa10eac3917ac0",
"class_move_interval_test.html",
"class_patternist_1_1_view.html#a396d6f5e02fa45e879824ca128ce8b08",
"class_process_1_1_default_layer_presenter.html#a606b15a739010707015bf1c05aca960c",
"class_process_1_1_mini_layer.html#aa13f2e7414a95a4f783bc424928fc33d",
"class_process_1_1_process_script_edit_dialog.html#aab4a3232346b790a2bff046a01a8cc82",
"class_protocols_1_1_phidget_protocol_settings_widget.html#adaa64e613429fbbcd4242beff35c54ac",
"class_scenario_1_1_base_scenario_container.html",
"class_scenario_1_1_command_1_1_create_state.html#a2bbf82eb9f31d589be66aefd7e511516",
"class_scenario_1_1_command_1_1_scenario_trigger_command_factory.html",
"class_scenario_1_1_drop_process_in_interval_helper.html#abc99338d95f2a0b9e1baea30f04a550a",
"class_scenario_1_1_interval_actions.html#a48e1c3cc7dc2d22b79e7748029764903",
"class_scenario_1_1_interval_view.html#a17cae4954a487aedf7a983af93e795ab",
"class_scenario_1_1_move_event_state.html#a797acf7184486e8a863d4f374f5503a4",
"class_scenario_1_1_scenario_document_model.html#ac61da1097dfb933565a5fa39024f43e1",
"class_scenario_1_1_simple_combo_box.html#ae1a8faec69a086a7e1df1d6d97133ad1",
"class_scenario_1_1_time_ruler_base.html#ac5caa36f3a1ce6f9baae02afecdfd873",
"class_simple_hierarchical_scenario_component.html#a3ac0623fa5ab76faaca91683869e57f2",
"class_state_1_1_unit_widget.html#aad71cd360b8b2c79248fa3c524d64903",
"class_uuid_key.html#a1b0205a1727c15419e8da073a7e7f47a",
"classoscr_1_1_custom_item.html#a160937fef15de81dd0ef19c6ebdd1767",
"classscore_1_1_command_stack.html#aea92e1995b2e156ce1c6165e49bca8e2",
"classscore_1_1_entity_map.html#adc12aed4372ad9a79266c9d81388bf90",
"classscore_1_1_interface_list.html#a244d835aaf156afd1f15b7a000efb9d8",
"classscore_1_1_q_graphics_enum.html#a45546b0c49fec4598d0dd1bcdf83dbf6",
"classscore_1_1_selection_stack.html#ac897033610da38463eefce20f0041c31",
"classscore_1_1_undo_application_plugin.html#af1d0d030fb09c84623b3eb7869cb505c",
"classscore_1_1gfx_1_1_screen_node_1_1_renderer.html",
"classvst3_1_1_model.html#adbd71f4715f62f77642c87918594504c",
"d_2_spline3_d_2_generator_dialog_8hpp_source.html",
"score-plugin-remotecontrol_2_remote_control_2_scenario_2_process_8hpp_source.html",
"struct_control_1_1_button.html",
"struct_control_1_1score__generic__plugin.html#ada657f31af6cbc5d808c8fe0d5322b01",
"struct_device_1_1_full_address_accessor_settings.html#a7161829c7c2816a959168230ac87a184",
"struct_faust_1_1_update_u_i.html#a99f8947df88bce9a34fe93bdd7deaeff",
"struct_j_s_o_n_reader_1_1assigner.html#a6cd5b3f7090c30ad14c3c1fcb028a757",
"struct_l_v2_1_1on__finish.html",
"struct_media_1_1_sound_1_1_waveform_computer_impl_1_1_size_infos.html#acf1e0a50af202b4ae33e4dce5e6e46b4",
"struct_nodes_1_1_l_f_o_1_1v2_1_1_node_1_1_state.html",
"struct_pd_1_1ossia__to__pd__value.html#ad93e03ee41009712641357f5f1de5d98",
"struct_protocols_1_1_artnet_1_1_fixture.html#aa40e22558cd14438a94682d39a435db8",
"struct_q_meta_type_id_3_01ossia_1_1audio__stretch__mode_01_4.html#a9cd0aa45c8d6ac237ad79f1895272452a82abd662d3d748dbb66e0e0da78a0ea7",
"struct_scenario_1_1_categorized_addresses.html#aa5644bbf855744c6f2ce7e51015607cc",
"struct_scenario_1_1_slot_id.html#ac5c53533636e4e102c9d5e7d166e7a0a",
"struct_state_1_1_unit.html#a692d5913573ba0a97c9f695eb9bdf6a5",
"struct_ui_1_1_signal_display_1_1_node.html#a4ba39cfce5b7fb834e7f14fcd0b97f1f",
"structoscr_1_1_deserializer.html#a88fcf161f867671099d85d12198d5650",
"structscore_1_1_bar_spin_box.html#a59bcd499b18d9a4017e9d88dea533fa9",
"structscore_1_1_open_documents_file.html",
"structscore_1_1_string_constants.html#ac1c01469a7970d2f9c40aedae2b46854",
"structscore_1_1gfx_1_1_pipeline.html#ae4febb1597a0ca26f6b35f8c2641fd82",
"structscore_1_1testing_1_1_mock_application.html"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';