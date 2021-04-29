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
"_clickable_label_item_8hpp_source.html",
"_fixed_tab_widget_8hpp_source.html",
"_models.html#Identifiers",
"_scenario_factory_8hpp_source.html",
"_web_socket_view_8hpp_source.html",
"class_base_scenario_ref_container.html#a13b26df1a904233a617e80f8b9c7b4a4",
"class_curve_1_1_model.html#a8735819ca57d45d1b9604c5b20f7fd1d",
"class_curve_1_1_view.html#a1bf21b646899a668b12a424216fc1655",
"class_data_stream_writer.html#a8ea0a72a387675b843e4f44e7ef798c1",
"class_device_1_1_device_enumerator.html#a1d0928f83fc65ffe85ffce1449592c60",
"class_execution_1_1_document_plugin.html#ac1ba48f11886af2fea78c0e05eb39eaf",
"class_execution_state_value_type.html#a21fa289f4736da8432ea91d488630970",
"class_explorer_1_1_device_explorer_filter_proxy_model.html#aba39f19217d3fbe7ce595c2d305fe811",
"class_gfx_1_1_filter_1_1_model.html#a2e3208132f94f4662097481e72292dc9",
"class_gfx_1_1gfx__window__context.html#adf7e223ee880568cbcafb1fd44581245",
"class_interp_state_1_1_colors.html#aaa78efe1aa6c5a065996cabb4b4a01fb",
"class_j_s_o_n_reader.html#aae04075987948241ceb1058394087cad",
"class_library_1_1_process_panel.html#a91e51d64338468c43f916147a619d913",
"class_media_1_1_set_merge_in_count.html#a476bcbcaede4d3bc400ae746cde3b493",
"class_midi_1_1_remove_notes.html#a2ab8712cdc6fe7d8d92e97b81b98a792",
"class_ongoing_command_dispatcher.html",
"class_process_1_1_automatable_factory.html#a974fee374455f052741b469685fad8b8",
"class_process_1_1_layer_factory_list.html#aa9283cb1ae1eb7074dd3bca3fca4e0b8",
"class_process_1_1_process_model.html#a7cdd2969451b0693fefed6853a7af09f",
"class_protocols_1_1_o_s_c_protocol_settings_widget.html#a90be2fc676b8eb59a9ed7df3c3008e31",
"class_scenario_1_1_address_bar_item.html#a58ef2789450ea966d50528b0aeb2d095",
"class_scenario_1_1_command_1_1_create_event___state.html#ac2a5d626911f1f11413ebbbd6d4463df",
"class_scenario_1_1_command_1_1_move_event_meta.html#ac89709c8c79794aaaa851f87f9091224",
"class_scenario_1_1_command_1_1_split_whole_sync.html#ad35410f53858580c9289f0ed9f8963fe",
"class_scenario_1_1_enable_when_scenario_interface_instant_object.html",
"class_scenario_1_1_interval_header.html#a69b647db331d2a2aba18269fae915df1",
"class_scenario_1_1_item_type.html#ae2f99877ab3f1f28c0bd48aedacd172ea6cd283e7e5d6bb40850821c1f7b240d8",
"class_scenario_1_1_object_item_model.html#a0329bfcda32a690aa8c858d2e8478f01",
"class_scenario_1_1_scenario_interface.html#a72e1afc91d14451663b1870422dc0d22",
"class_scenario_1_1_state_model.html#a06b5e5770aea4c0968e1bc9fe9ef3322",
"class_scenario_1_1_time_sync_summary_widget.html#a678fb7743d72466ae64eb454281242e6",
"class_spline_1_1_curve_item.html#a9562a92517f4917cc2b29c9959697b9d",
"class_tool_palette_input_dispatcher.html#a430a9c5fb30b5e8ffab6a802733dd4a0",
"class_web_socket_view.html#a42be4604d0485cae53687680b1f55778",
"classscore_1_1_command_stack.html#a4e71c0e7fa4acca66ba7d95d9c0a3124",
"classscore_1_1_entity_list.html#abdc350c561338d323fbe74f09dee81a0",
"classscore_1_1_log_messages_item_model.html#a3258a3c2b58393e6be38cf1a9fbfba9c",
"classscore_1_1_q_graphics_knob.html#a8b679e54dfd536a31b26a7f9713bc241",
"classscore_1_1_settings_view.html#a5c9773f5bf8beeaa5eb62dbf2869261f",
"classscore_1_1_zoom_item.html#aad1d823932427c2471673e642318a3b9",
"classvst3_1_1param__queue.html#a12e80c7be6b01e84c9c1eeb075afd23e",
"namespacemembers_type.html",
"struct_automation_1_1_recreate_on_play_1_1range__position.html#a7599eaf64077122a49cfcb2448be498c",
"struct_control_1_1setup___impl0_1_1con__validated.html#abc6fbc0e50d0ccea721ce238ca42c2b8",
"struct_empty_decoder.html#a4261e4ac96e6bbbc45d440c4a49f4368",
"struct_gfx_1_1_camera_settings.html#a25551c9b0211e5d371f9248be832ae03",
"struct_j_s_1_1_executor_1_1js__process.html#ab12067305e7c7548465967a57c18cca9",
"struct_library_1_1_subcategories.html#af951ffdf31b3bcdce2e74ba2dd87ecbd",
"struct_metadata_3_01_object_key__k_00_01_faust_d_s_p_1_1_fx_3_01mydsp_01_4_01_4.html",
"struct_nodes_1_1_midi_util_1_1_node.html#a11cac1032856a782f1d8dd6ac0aefabc",
"struct_process_1_1_int_spin_box.html#ab09b661a53e603a821b66bbbcecd7cfd",
"struct_protocols_1_1_minuit_specific_settings.html#a6f5cf61aeea82ab89aa291a557b14094",
"struct_recording_1_1_parameter_policy.html",
"struct_scenario_1_1_command_1_1_message_pairs.html#aa6e428f45a6c3b8c50369c9c22b1d1fc",
"struct_scenario_1_1_state_overlays.html",
"struct_std_variant_j_s_o_n_deserializer.html#a601b7e218d41d6fad28b2d008ff4b5bf",
"struct_ui_1_1_signal_display_1_1_node_1_1_metadata.html",
"structscore_1_1_addon.html#a0838aba6eab19f3e7f288f167702ec7b",
"structscore_1_1_g_u_i_elements.html#ab1846cd83b17d8d1d39b9ac120d5b8b8",
"structscore_1_1_string_constants.html#a9e79cdc0739dd79b6f695f959ca43982",
"structstd_1_1hash_3_01std_1_1pair_3_01_q_string_00_01_q_string_01_4_01_4.html"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';